"use client";

import { Analytics } from "@vercel/analytics/next";

export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        const url = new URL(event.url);
        // Avoid collecting search parameters or fragments.
        url.search = "";
        url.hash = "";
        return { ...event, url: url.toString() };
      }}
    />
  );
}
