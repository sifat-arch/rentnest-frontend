import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, Mail, Shield } from "lucide-react";
import DropdownButton from "./DripdownButton";

type IUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
};

type AllUsersCardProps = {
  user: IUser;
};

export default function AllUsersCard({ user }: AllUsersCardProps) {
  const getRoleBadge = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "bg-[#18342d] text-[#e5bd8b] border border-[#18342d]";
      case "LANDLORD":
        return "bg-[#d9a66b]/20 text-[#8f5a1d] border border-[#d9a66b]/30";
      default:
        return "bg-[#18342d]/5 text-[#18342d] border border-[#18342d]/10";
    }
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="space-y-4">
        {/* Header: Avatar, Name & Dropdown */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-11 border border-[#e7e5df]">
              <AvatarFallback className="bg-[#18342d] text-sm font-bold text-[#e5bd8b]">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-[#18342d]">
                {user.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-[#64716c]">
                <Mail className="size-3 text-[#b77940]" />
                <span className="truncate">{user.email}</span>
              </div>
            </div>
          </div>

          <DropdownButton userId={user.id} status={user.status} />
        </div>

        {/* Badges: Role and Status */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${getRoleBadge(
              user.role
            )}`}
          >
            {user.role}
          </span>

          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              user.status === "ACTIVE"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            <Shield className="size-3" />
            {user.status}
          </span>
        </div>
      </div>

      {/* Footer: Date Joined */}
      <div className="mt-5 flex items-center gap-1.5 border-t border-[#e7e5df] pt-4 text-xs text-[#64716c]">
        <CalendarDays className="size-3.5 text-[#b77940]" />
        <span>Joined {new Date(user.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })}</span>
      </div>
    </div>
  );
}
