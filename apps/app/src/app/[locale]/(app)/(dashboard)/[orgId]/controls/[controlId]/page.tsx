import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import { SingleControl } from "./components/SingleControl";
import { getControl } from "./data/getControl";
import { getOrganizationControlProgress } from "./data/getOrganizationControlProgress";
import type { ControlProgressResponse } from "./data/getOrganizationControlProgress";
import { headers } from "next/headers";
import PageWithBreadcrumb from "@/components/pages/PageWithBreadcrumb";
import { getRelatedArtifacts } from "@/app/[locale]/(app)/(dashboard)/[orgId]/controls/[controlId]/data/getRelatedArtifacts";

interface ControlPageProps {
	params: {
		controlId: string;
		orgId: string;
		locale: string;
	};
}

export default async function ControlPage({ params }: ControlPageProps) {
	// Await params before using them
	const { controlId, orgId, locale } = await Promise.resolve(params);

	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.session.activeOrganizationId) {
		redirect("/");
	}

	const control = await getControl(controlId);

	// If we get an error or no result, redirect
	if (!control || "error" in control) {
		redirect("/");
	}

	const organizationControlProgressResult =
		await getOrganizationControlProgress(controlId);

	// Extract the progress data from the result or create default data if there's an error
	const controlProgress: ControlProgressResponse = ("data" in
		(organizationControlProgressResult || {}) &&
		organizationControlProgressResult?.data?.progress) || {
		total: 0,
		completed: 0,
		progress: 0,
		byType: {},
	};

	const relatedArtifacts = await getRelatedArtifacts({
		organizationId: orgId,
		controlId: controlId,
	});

	return (
		<PageWithBreadcrumb
			breadcrumbs={[
				{ label: "Controls", href: `/${orgId}/controls` },
				{ label: control.name, current: true },
			]}
		>
			<SingleControl
				control={control}
				controlProgress={controlProgress}
				relatedArtifacts={relatedArtifacts}
			/>
		</PageWithBreadcrumb>
	);
}
