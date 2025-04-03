import { auth } from "@bubba/auth";
import { getI18n } from "@/locales/server";
import { db } from "@bubba/db";
import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { Suspense } from "react";
import { PolicyStatusChart } from "./components/policy-status-chart";
import { PolicyAssigneeChart } from "./components/policy-assignee-chart";
import Loading from "./loading";
import { headers } from "next/headers";

export default async function PoliciesOverview({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setStaticParamsLocale(locale);

	const overview = await getPoliciesOverview();

	return (
		<Suspense fallback={<Loading />}>
			<div className="space-y-4 sm:space-y-8">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<PolicyStatusChart data={overview} />
					<PolicyAssigneeChart data={overview?.assigneeData} />
				</div>
			</div>
		</Suspense>
	);
}

const getPoliciesOverview = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.session?.activeOrganizationId) {
		return null;
	}

	const organizationId = session.session.activeOrganizationId;

	return await db.$transaction(async (tx) => {
		const [
			totalPolicies,
			publishedPolicies,
			draftPolicies,
			archivedPolicies,
			needsReviewPolicies,
			policiesByAssignee,
			policiesByAssigneeStatus,
		] = await Promise.all([
			tx.policy.count({
				where: {
					organizationId,
				},
			}),
			tx.policy.count({
				where: {
					organizationId,
					status: "published",
				},
			}),
			tx.policy.count({
				where: {
					organizationId,
					status: "draft",
				},
			}),
			tx.policy.count({
				where: {
					organizationId,
					status: "archived",
				},
			}),
			tx.policy.count({
				where: {
					organizationId,
					status: "needs_review",
				},
			}),
			tx.policy.groupBy({
				by: ["assigneeId"],
				_count: true,
				where: {
					organizationId,
					assigneeId: { not: null },
				},
			}),
			tx.policy.findMany({
				where: {
					organizationId,
					assigneeId: { not: null },
				},
				select: {
					status: true,
					assignee: {
						select: {
							id: true,
							user: {
								select: {
									name: true,
								},
							},
						},
					},
				},
			}),
		]);

		// Transform the data for easier consumption by the chart component
		// First group by owner
		const policyDataByOwner = new Map();

		for (const policy of policiesByAssigneeStatus) {
			if (!policy.assignee) continue;

			const assigneeId = policy.assignee.id;
			if (!policyDataByOwner.has(assigneeId)) {
				policyDataByOwner.set(assigneeId, {
					id: assigneeId,
					name: policy.assignee.user.name || "Unknown",
					total: 0,
					published: 0,
					draft: 0,
					archived: 0,
					needs_review: 0,
				});
			}

			const assigneeData = policyDataByOwner.get(assigneeId);
			assigneeData.total += 1;

			// Handle each status type explicitly
			const status = policy.status as
				| "published"
				| "draft"
				| "archived"
				| "needs_review";
			if (status === "published") assigneeData.published += 1;
			else if (status === "draft") assigneeData.draft += 1;
			else if (status === "archived") assigneeData.archived += 1;
			else if (status === "needs_review") assigneeData.needs_review += 1;
		}

		const assigneeData = Array.from(policyDataByOwner.values());

		return {
			totalPolicies,
			publishedPolicies,
			draftPolicies,
			archivedPolicies,
			needsReviewPolicies,
			policiesByAssignee,
			assigneeData,
		};
	});
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	setStaticParamsLocale(locale);
	const t = await getI18n();

	return {
		title: t("sidebar.policies"),
	};
}
