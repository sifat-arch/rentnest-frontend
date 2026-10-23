"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Ban, CheckCircle2, MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { banUsre } from "../_actions/banUser";
import { unbanUsre } from "../_actions/unbanUser";
import { useRouter } from "next/navigation";

type DropdownButtonProps = {
  userId: string;
  status: "ACTIVE" | "BLOCKED";
};

const DropdownButton = ({ userId, status }: DropdownButtonProps) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const handleBan = () => {
    startTransition(async () => {
      const res = await banUsre(userId);

      if (res.success) {
        toast.success(res.message);
        router.refresh();
      } else {
        toast.error(res.message);
        router.refresh();
      }
    });
  };

  const handleUnban = () => {
    startTransition(async () => {
      const res = await unbanUsre(userId);

      if (res.success) {
        toast.success(res.message);
        router.refresh();
      } else {
        toast.error(res.message);
        router.refresh();
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          disabled={pending}
          className="size-8 rounded-xl border-[#e7e5df] text-[#18342d] hover:bg-[#f7f6f2] transition cursor-pointer"
        >
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-36 rounded-2xl border-[#e7e5df] p-1.5 shadow-lg bg-white">
        {status === "ACTIVE" ? (
          <DropdownMenuItem
            className="cursor-pointer rounded-xl text-rose-600 focus:bg-rose-50 focus:text-rose-700 text-xs font-semibold"
            onClick={handleBan}
          >
            <Ban className="mr-2 size-3.5" />
            Ban Account
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            className="cursor-pointer rounded-xl text-emerald-700 focus:bg-emerald-50 focus:text-emerald-800 text-xs font-semibold"
            onClick={handleUnban}
          >
            <CheckCircle2 className="mr-2 size-3.5" />
            Unban Account
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownButton;
