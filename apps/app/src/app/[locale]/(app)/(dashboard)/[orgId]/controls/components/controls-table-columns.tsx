"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DisplayFrameworkStatus } from "@/components/frameworks/framework-status";
import {
	Artifact,
	Control,
	FrameworkInstance,
	RequirementMap,
} from "@comp/db/types";
import { Badge } from "@comp/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { getFrameworkDetails } from "../../frameworks/lib/getFrameworkDetails";
import { getControlStatus } from "../lib/utils";

export function getControlColumns(): ColumnDef<
	Control & {
		artifacts: (Artifact & {
			policy: { status: string } | null;
			evidence: { published: boolean } | null;
		})[];
		requirementsMapped: (RequirementMap & {
			frameworkInstance: FrameworkInstance;
		})[];
	}
>[] {
	return [
		{
			id: "name",
			accessorKey: "name",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Control Name" />
			),
			cell: ({ row }) => {
				return (
					<div className="flex items-center gap-2">
						<span className="max-w-[31.25rem] truncate font-medium">
							{row.getValue("name")}
						</span>
					</div>
				);
			},
			meta: {
				label: "Control Name",
				placeholder: "Search for a control...",
				variant: "text",
			},
			enableColumnFilter: true,
		},
		{
			id: "status",
			accessorKey: "status",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status" />
			),
			cell: ({ row }) => {
				const control = row.original;
				const status = getControlStatus(control);

				return <DisplayFrameworkStatus status={status} />;
			},
			meta: {
				label: "Status",
				placeholder: "Search status...",
				variant: "select",
			},
		},
		{
			id: "mappedRequirements",
			accessorKey: "mappedRequirements",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Linked Requirements" />
			),
			cell: ({ row }) => {
				const control = row.original;

				return (
					<div className="flex flex-wrap gap-1">
						{control.requirementsMapped.length > 0 ? (
							control.requirementsMapped.map((req) => {
								const frameworkName = getFrameworkDetails(
									req.frameworkInstance.frameworkId,
								).name;
								return (
									<Badge key={req.id} variant="secondary" className="text-xs">
										{frameworkName}: {req.requirementId.split("_").pop()}
									</Badge>
								);
							})
						) : (
							<span className="text-muted-foreground">None</span>
						)}
					</div>
				);
			},
			meta: {
				label: "Linked Requirements",
				placeholder: "Search Linked Requirements...",
				variant: "text",
			},
		},
	];
}
