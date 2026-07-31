// app/(dashboardGroup)/_components/shaired/GlobalLoading.tsx
import { Loader2 } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default GlobalLoading;
