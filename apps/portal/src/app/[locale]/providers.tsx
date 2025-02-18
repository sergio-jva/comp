"use client";

import { I18nProviderClient } from "@/app/locales/client";
import { env } from "@/env.mjs";
import { Analytics, AnalyticsProvider } from "@bubba/analytics";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import type { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
  locale: string;
};

export function Providers({ children, locale }: ProviderProps) {
  const hasAnalyticsKeys =
    env.NEXT_PUBLIC_POSTHOG_KEY && env.NEXT_PUBLIC_POSTHOG_HOST;

  useEffect(() => {
    if (hasAnalyticsKeys) {
      Analytics.init({
        apiKey: env.NEXT_PUBLIC_POSTHOG_KEY!,
        apiHost: env.NEXT_PUBLIC_POSTHOG_HOST!,
      });
    }
  }, [hasAnalyticsKeys]);

  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {hasAnalyticsKeys ? (
          <AnalyticsProvider
            apiKey={env.NEXT_PUBLIC_POSTHOG_KEY!}
            apiHost={env.NEXT_PUBLIC_POSTHOG_HOST!}
          >
            {children}
          </AnalyticsProvider>
        ) : (
          children
        )}
      </ThemeProvider>
    </I18nProviderClient>
  );
}
