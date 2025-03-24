"use client";

import { updateVendorSchema } from "@/actions/schema";
import { SelectUser } from "@/components/select-user";
import { VENDOR_STATUS_TYPES, VendorStatus } from "@/components/vendor-status";
import { useI18n } from "@/locales/client";
import {
    VendorCategory,
    type User,
    type Vendor,
} from "@bubba/db/types";
import { Button } from "@bubba/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@bubba/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@bubba/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { updateVendorAction } from "../actions/update-vendor-action";

export function UpdateVendorOverview({
  vendor,
  users,
}: {
  vendor: Vendor;
  users: User[];
}) {
  const t = useI18n();

  const updateVendor = useAction(updateVendorAction, {
    onSuccess: () => {
      toast.success(t("vendors.form.update_vendor_success"));
    },
    onError: () => {
      toast.error(t("vendors.form.update_vendor_error"));
    },
  });

  const form = useForm<z.infer<typeof updateVendorSchema>>({
    resolver: zodResolver(updateVendorSchema),
    defaultValues: {
      id: vendor.id,
      name: vendor.name,
      description: vendor.description,
      ownerId: vendor.ownerId ?? undefined,
      category: vendor.category,
      status: vendor.status,
    },
  });

  const onSubmit = (data: z.infer<typeof updateVendorSchema>) => {
    updateVendor.execute({
      id: data.id,
      name: data.name,
      description: data.description,
      ownerId: data.ownerId,
      category: data.category,
      status: data.status,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="ownerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("common.assignee.label")}</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    onOpenChange={() => form.handleSubmit(onSubmit)}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("common.assignee.placeholder")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectUser
                        isLoading={false}
                        onSelect={field.onChange}
                        selectedId={field.value}
                        users={users}
                      />
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("vendors.form.vendor_status")}</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("vendors.form.vendor_status_placeholder")}
                      >
                        {field.value && <VendorStatus status={field.value} />}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(VENDOR_STATUS_TYPES).map((status) => (
                        <SelectItem key={status} value={status}>
                          <VendorStatus status={status} />
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("vendors.form.vendor_category")}</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("vendors.form.vendor_category_placeholder")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(VendorCategory).map((category) => {
                        const formattedCategory = category
                          .toLowerCase()
                          .split("_")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ");
                        return (
                          <SelectItem key={category} value={category}>
                            {formattedCategory}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button
            type="submit"
            variant="action"
            disabled={updateVendor.status === "executing"}
          >
            {updateVendor.status === "executing" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              t("common.actions.save")
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
