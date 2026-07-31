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
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" disabled={pending}>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {status === "ACTIVE" ? (
          <DropdownMenuItem
            className="cursor-pointer text-red-600 focus:text-red-600"
            onClick={handleBan}
          >
            <Ban className="mr-2 h-4 w-4" />
            Ban User
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            className="cursor-pointer text-green-600 focus:text-green-600"
            onClick={handleUnban}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Unban User
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownButton;
