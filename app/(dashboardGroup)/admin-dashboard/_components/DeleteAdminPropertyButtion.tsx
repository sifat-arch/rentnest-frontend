"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { deleteProperty } from "../../_actions/deleteProperty";

type DeletePropertyButtonProps = {
  propertyId: string;
};

const DeleteAdminPropertyButtion = ({
  propertyId,
}: DeletePropertyButtonProps) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?",
    );

    if (!confirmDelete) return;

    startTransition(async () => {
      const result = await deleteProperty(propertyId);

      if (result.success) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Button
      size="icon"
      variant="destructive"
      onClick={handleDelete}
      disabled={pending}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteAdminPropertyButtion;
