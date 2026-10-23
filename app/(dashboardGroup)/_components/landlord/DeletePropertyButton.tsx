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
    const ok = window.confirm("Are you sure you want to delete this property listing?");

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
      variant="outline"
      disabled={pending}
      onClick={handleDelete}
      className="size-9 rounded-xl border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100 transition cursor-pointer"
      title="Delete Property"
    >
      <Trash2 className="size-4 text-rose-600" />
    </Button>
  );
};

export default DeletePropertyButton;
