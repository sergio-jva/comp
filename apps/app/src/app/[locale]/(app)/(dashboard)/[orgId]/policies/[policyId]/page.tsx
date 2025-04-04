import PageWithBreadcrumb from "@/components/pages/PageWithBreadcrumb";
import { PolicyOverview } from "@/components/policies/policy-overview";
import { getI18n } from "@/locales/server";
import { auth } from "@comp/auth";
import { db } from "@comp/db";
import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { headers } from "next/headers";
import { JSONContent } from "novel";
import { cache } from "react";
import { PolicyPageEditor } from "./editor/components/PolicyDetails";

export default async function PolicyDetails({
  params,
}: {
  params: Promise<{ locale: string; policyId: string; orgId: string }>;
}) {
  const { locale, policyId, orgId } = await params;

  setStaticParamsLocale(locale);
  const policy = await getPolicy(policyId);
  const assignees = await getAssignees();

  return (
    <PageWithBreadcrumb
      breadcrumbs={[
        { label: "Policies", href: `/${orgId}/policies/all` },
        { label: policy?.name ?? "Policy", current: true },
      ]}
    >
      <PolicyOverview policy={policy ?? null} assignees={assignees} />
      <PolicyPageEditor
        policyId={policyId}
        policyContent={policy?.content ? (policy.content as JSONContent[]) : []}
      />
    </PageWithBreadcrumb>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; policyId: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  setStaticParamsLocale(locale);
  const t = await getI18n();

  return {
    title: t("policies.overview.title"),
  };
}

const getPolicy = cache(async (policyId: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const organizationId = session?.session.activeOrganizationId;

  if (!organizationId) {
    return null;
  }

  const policy = await db.policy.findUnique({
    where: { id: policyId, organizationId },
  });

  if (!policy) {
    return null;
  }

  return policy;
});

const getAssignees = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const organizationId = session?.session.activeOrganizationId;

  if (!organizationId) {
    return [];
  }

  const assignees = await db.member.findMany({
    where: {
      organizationId,
      role: {
        notIn: ["employee"],
      },
    },
    include: {
      user: true,
    },
  });

  return assignees;
});
