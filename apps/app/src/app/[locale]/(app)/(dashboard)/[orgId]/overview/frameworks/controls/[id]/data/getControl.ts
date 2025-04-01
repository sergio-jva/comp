import { auth } from "@/auth/auth";
import { db } from "@bubba/db";
import { headers } from "next/headers";

export const getControl = async (id: string) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return {
			error: "Unauthorized",
		};
	}

	const control = await db.control.findUnique({
		where: {
			organizationId: session.user.organizationId,
			id,
		},
	});

	return control;
};
