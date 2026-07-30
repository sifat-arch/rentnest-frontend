"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { deleteProperty } from "../../_actions/deleteProperty";

type Props = {
  propertyId: string;
};

const DeletePropertyButton = ({ propertyId }: Props) => {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    const ok = window.confirm("Are you sure you want to delete this property?");

    if (!ok) return;

    startTransition(async () => {
      const result = await deleteProperty(propertyId);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Button
      size="icon"
      variant="destructive"
      disabled={pending}
      onClick={handleDelete}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeletePropertyButton;
