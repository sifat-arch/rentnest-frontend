"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DashboardContentLoader from "./DashboardContentLoader";

interface DashboardNavContextType {
  isNavigating: boolean;
  startNavigating: (targetHref?: string) => void;
}

const DashboardNavContext = createContext<DashboardNavContextType>({
  isNavigating: false,
  startNavigating: () => {},
});

export const useDashboardNav = () => useContext(DashboardNavContext);

export const DashboardNavProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  // When pathname changes, navigation has completed
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Safety fallback timer if navigation completes without pathname change
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  const startNavigating = (targetHref?: string) => {
    if (!targetHref || targetHref !== pathname) {
      setIsNavigating(true);
    }
  };

  // Auto-listen to dashboard links clicked inside the dashboard
  useEffect(() => {
    const handleDashboardLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
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
        const targetUrl = new URL(href, window.location.origin);
        const currentUrl = new URL(window.location.href);

        const isDashboardRoute = (path: string) =>
          path.startsWith("/admin-dashboard") ||
          path.startsWith("/landlord-dashboard") ||
          path.startsWith("/tenant-dashboard");

        // If navigating within dashboard routes, trigger inner right-side loading
        if (
          isDashboardRoute(currentUrl.pathname) &&
          isDashboardRoute(targetUrl.pathname) &&
          targetUrl.pathname !== currentUrl.pathname
        ) {
          setIsNavigating(true);
        }
      } catch {}
    };

    window.addEventListener("click", handleDashboardLinkClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleDashboardLinkClick, { capture: true });
    };
  }, []);

  return (
    <DashboardNavContext.Provider value={{ isNavigating, startNavigating }}>
      {children}
    </DashboardNavContext.Provider>
  );
};

export const DashboardMainContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isNavigating } = useDashboardNav();

  if (isNavigating) {
    return <DashboardContentLoader />;
  }

  return <>{children}</>;
};
