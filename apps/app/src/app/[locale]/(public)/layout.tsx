import { auth } from "@bubba/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.session.activeOrganizationId) {
    redirect(`/${session.session.activeOrganizationId}/overview`)
  }
  return <>{children}</>;
}
