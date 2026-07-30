"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCategory } from "../../_actions/createCategrory";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

const CreateCategoryForm = () => {
  const [state, formAction, pending] = useActionState(
    createCategory,
    initialState,
  );

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-xl border bg-card p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold">Create Category</h2>
        <p className="text-sm text-muted-foreground">
          Add a new property category.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Category Name</Label>

        <Input id="name" name="name" placeholder="Paint House" />

        {state.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name[0]}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating..." : "Create Category"}
      </Button>
    </form>
  );
};

export default CreateCategoryForm;
