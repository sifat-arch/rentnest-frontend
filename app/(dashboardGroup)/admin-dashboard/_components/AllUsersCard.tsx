import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

const roleVariant = {
  ADMIN: "destructive",
  LANDLORD: "default",
  TENANT: "secondary",
} as const;

export default function AllUsersCard({ user }: AllUsersCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="text-base font-semibold">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold">{user.name}</h3>

            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              {user.email}
            </div>
          </div>
        </div>

        <Badge variant={roleVariant[user.role]}>{user.role}</Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Status</span>
          </div>

          <Badge variant={user.status === "ACTIVE" ? "default" : "destructive"}>
            {user.status}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          Joined {new Date(user.createdAt).toLocaleDateString("en-GB")}
        </div>
      </CardContent>

      <DropdownButton userId={user.id} status={user.status} />
    </Card>
  );
}
