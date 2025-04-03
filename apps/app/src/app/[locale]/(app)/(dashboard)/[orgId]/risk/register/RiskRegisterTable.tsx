"use client";

import { CreateRiskSheet } from "@/components/sheets/create-risk-sheet";
import { DataTable } from "@/components/ui/data-table";
import { useI18n } from "@/locales/client";
import type {
	Departments,
	Member,
	Risk,
	RiskStatus,
	User,
} from "@comp/db/types";
import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { columns } from "./components/table/RiskRegisterColumns";
import { RiskRegisterFilters } from "./components/table/RiskRegisterFilters";
import { useSession } from "@comp/auth";

// Define the expected structure of a risk with User as assignee
export type RiskRegisterTableRow = Risk & { assignee: User | null };

export const RiskRegisterTable = ({
	risks,
	isLoading,
	assignees,
}: {
	risks: RiskRegisterTableRow[];
	isLoading: boolean;
	assignees: (Member & { user: User })[];
}) => {
	const t = useI18n();
	const session = useSession();
	const orgId = session?.data?.session?.activeOrganizationId;

	// State
	const [search, setSearch] = useState("");
	const [open, setOpen] = useQueryState("create-risk-sheet");

	const [page, setPage] = useQueryState("page", {
		defaultValue: 1,
		parse: Number.parseInt,
	});
	const [pageSize, setPageSize] = useQueryState("pageSize", {
		defaultValue: 10,
		parse: Number,
	});
	const [status, setStatus] = useQueryState<RiskStatus | null>("status", {
		defaultValue: null,
		parse: (value) => value as RiskStatus | null,
	});
	const [department, setDepartment] = useQueryState<Departments | null>(
		"department",
		{
			defaultValue: null,
			parse: (value) => value as Departments | null,
		},
	);
	const [assigneeId, setAssigneeId] = useQueryState<string | null>(
		"assigneeId",
		{
			defaultValue: null,
			parse: (value) => value,
		},
	);

	const hasActiveFilters = Boolean(status || department || assigneeId);

	const handleClearFilters = () => {
		setStatus(null);
		setDepartment(null);
		setAssigneeId(null);
		setPage(1);
	};

	const departments: Departments[] = [
		"none",
		"it",
		"hr",
		"admin",
		"gov",
		"itsm",
		"qms",
	] as const;

	const filterCategories = RiskRegisterFilters({
		setPage: (newPage: number) => setPage(newPage),
		departments: departments,
		assignees,
		status,
		setStatus,
		department,
		setDepartment,
		assigneeId,
		setAssigneeId,
	});

	return (
		<>
			<DataTable
				columns={columns(orgId ?? "")}
				data={risks}
				isLoading={isLoading}
				search={{
					value: search,
					onChange: setSearch,
				}}
				pagination={{
					page: Number(page),
					pageSize: Number(pageSize),
					totalCount: risks.length,
					totalPages: Math.ceil(risks.length / Number(pageSize)),
					hasNextPage:
						Number(page) < Math.ceil(risks.length / Number(pageSize)),
					hasPreviousPage: Number(page) > 1,
				}}
				onPageChange={(newPage) => setPage(newPage)}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				filters={{
					categories: filterCategories,
					hasActiveFilters,
					onClearFilters: handleClearFilters,
					activeFilterCount: [status, department, assigneeId].filter(Boolean)
						.length,
				}}
				ctaButton={{
					label: t("risk.register.empty.create_risk"),
					onClick: () => setOpen("true"),
					icon: <Plus className="h-4 w-4 mr-2" />,
				}}
			/>
			<CreateRiskSheet assignees={assignees} />
		</>
	);
};
