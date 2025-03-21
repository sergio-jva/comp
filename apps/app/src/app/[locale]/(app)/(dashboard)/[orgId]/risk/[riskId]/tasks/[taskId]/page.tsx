import { auth } from "@/auth";
import { TaskComment } from "@/components/risks/tasks/task-comments";
import { TaskOverview } from "@/components/risks/tasks/task-overview";
import { TaskAttachments } from "@/components/risks/tasks/task-attachments";
import { getI18n } from "@/locales/server";
import { db } from "@bubba/db";
import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { redirect } from "next/navigation";

interface PageProps {
	params: Promise<{ riskId: string; taskId: string }>;
}

export default async function RiskPage({ params }: PageProps) {
	const session = await auth();
	const { riskId, taskId } = await params;

	if (!session) {
		redirect("/auth");
	}

	if (!session.user.organizationId || !riskId) {
		redirect("/");
	}

	const task = await getTask(riskId, taskId);

	if (!task) {
		redirect(`/${session.user.organizationId}/risk`);
	}

	const users = await getUsers(session.user.organizationId);

	return (
		<div className="flex flex-col gap-4">
			<TaskOverview task={task} users={users} />
			<TaskComment task={task} users={users} />
			<TaskAttachments taskId={taskId} />
		</div>
	);
}

const getTask = async (riskId: string, taskId: string) => {
	const task = await db.riskMitigationTask.findUnique({
		where: {
			riskId: riskId,
			id: taskId,
		},
		include: {
			owner: true,
			TaskAttachment: true,
			TaskComments: true,
		},
	});

	return task;
};

const getUsers = async (organizationId: string) => {
	const users = await db.user.findMany({
		where: { organizationId: organizationId },
	});

	return users;
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
		title: t("risk.tasks.task_overview"),
	};
}
