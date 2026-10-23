"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import RentNestLoader from "./RentNestLoader";

export const triggerRouteLoading = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("start-route-loading"));
  }
};

function GlobalRouteLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  // When pathname or searchParams change, route navigation finished
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isNavigating]);

  // Listen for programmatic triggers
  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    window.addEventListener("start-route-loading", handleStart);
    return () => {
      window.removeEventListener("start-route-loading", handleStart);
    };
  }, []);

  // Listen for global link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, hashes, and modifier clicks
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.origin);

        const isDashboardRoute = (path: string) =>
          path.startsWith("/admin-dashboard") ||
          path.startsWith("/landlord-dashboard") ||
          path.startsWith("/tenant-dashboard");

        // If navigating within dashboard routes, DO NOT trigger full-page global loader!
        if (
          isDashboardRoute(currentUrl.pathname) &&
          isDashboardRoute(targetUrl.pathname)
        ) {
          return;
        }

        // If click originates inside dashboard sidebar or container, skip global loader
        if (
          anchor.closest("[data-sidebar]") ||
          anchor.closest("aside") ||
          anchor.closest("[data-no-global-loader]")
        ) {
          if (isDashboardRoute(targetUrl.pathname)) {
            return;
          }
        }

        // If it's navigating to a different pathname or search, trigger loading!
        if (
          targetUrl.pathname !== currentUrl.pathname ||
          targetUrl.search !== currentUrl.search
        ) {
          setIsNavigating(true);
        }
      } catch {
        // In case of invalid URL, ignore
      }
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  if (!isNavigating) return null;

  return <RentNestLoader fullScreen={true} />;
}

export default function GlobalRouteLoader() {
  return (
    <Suspense fallback={null}>
      <GlobalRouteLoaderInner />
    </Suspense>
  );
}
