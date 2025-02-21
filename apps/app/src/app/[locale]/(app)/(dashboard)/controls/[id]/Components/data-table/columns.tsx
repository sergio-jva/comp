"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { CheckCircle2, XCircle } from "lucide-react";

export interface RequirementType {
  id: string;
  type: string;
  description: string | null;
  organizationPolicy?: {
    policy?: {
      id: string;
      name: string;
    };
    status?: string;
  } | null;
}

export const columns: ColumnDef<RequirementType>[] = [
  {
    id: "type",
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => row.original.type,
  },
  {
    id: "description",
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="truncate">{row.original.description}</div>
    ),
  },
  {
    id: "status",
    accessorKey: "organizationPolicy.status",
    header: "Status",
    cell: ({ row }) => {
      const requirement = row.original;
      const isCompleted =
        requirement.type === "policy"
          ? requirement.organizationPolicy?.status === "published"
          : false;

      return (
        <div className="flex items-center justify-center">
          {isCompleted ? (
            <CheckCircle2 size={16} className="text-green-500" />
          ) : (
            <XCircle size={16} className="text-red-500" />
          )}
        </div>
      );
    },
  },
];
