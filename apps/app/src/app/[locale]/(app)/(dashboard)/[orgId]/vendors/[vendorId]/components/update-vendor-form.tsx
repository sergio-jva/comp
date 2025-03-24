"use client";

import { updateVendorSchema } from "@/actions/schema";
import { useI18n } from "@/locales/client";
import type { Vendor } from "@bubba/db/types";
import { Button } from "@bubba/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@bubba/ui/form";
import { Input } from "@bubba/ui/input";
import { Textarea } from "@bubba/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useQueryState } from "nuqs";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { updateVendorAction } from "../actions/update-vendor-action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bubba/ui/select";
import { VendorCategory, VendorStatus } from "@bubba/db/types";

export function UpdateVendorForm({
  vendor,
}: {
  vendor: Vendor;
}) {
  const t = useI18n();
  const [open, setOpen] = useQueryState("vendor-overview-sheet");

  const updateVendor = useAction(updateVendorAction, {
    onSuccess: () => {
      toast.success(t("vendors.form.update_vendor_success"));
      setOpen(null);
    },
    onError: (error) => {
      console.error("Error updating vendor:", error);
      toast.error(t("vendors.form.update_vendor_error"));
    },
  });

  const form = useForm<z.infer<typeof updateVendorSchema>>({
    resolver: zodResolver(updateVendorSchema),
    defaultValues: {
      id: vendor.id,
      name: vendor.name,
      description: vendor.description,
      category: vendor.category,
      status: vendor.status,
      ownerId: vendor.ownerId ?? undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof updateVendorSchema>) => {
    console.log("Form submitted with data:", data);
    updateVendor.execute({
      id: data.id,
      name: data.name,
      description: data.description,
      category: data.category,
      status: data.status,
      ownerId: data.ownerId,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("vendors.form.vendor_name")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoFocus
                  className="mt-3"
                  placeholder={t("vendors.form.vendor_name_description")}
                  autoCorrect="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("vendors.form.vendor_description")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="mt-3 min-h-[80px]"
                  placeholder={t("vendors.form.vendor_description_description")}
                />
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("vendors.form.vendor_category_placeholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(VendorCategory).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("vendors.form.vendor_status_placeholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(VendorStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-8">
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
