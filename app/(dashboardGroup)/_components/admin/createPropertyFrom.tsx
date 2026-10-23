"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCategory } from "../../_actions/createCategrory";
import { FolderPlus, Sparkles } from "lucide-react";

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
      className="space-y-6 rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-7 shadow-xs"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b77940]">
            Classification
          </span>
          <Sparkles className="size-3 text-[#d9a66b]" />
        </div>
        <h2 className="mt-1 text-xl font-semibold text-[#18342d]">
          Create Category
        </h2>
        <p className="mt-1 text-xs text-[#64716c]">
          Add a new property category (e.g. Penthouse, Duplex, Villa).
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-xs font-semibold text-[#18342d]">
          Category Name
        </Label>

        <Input
          id="name"
          name="name"
          placeholder="e.g. Luxury Apartment, Penthouse"
          className="h-11 rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
        />

        {state.errors?.name && (
          <p className="text-xs font-medium text-rose-600">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-11 rounded-xl bg-[#18342d] text-sm font-semibold text-white shadow-xs transition hover:bg-[#102b25] disabled:opacity-50 cursor-pointer"
        disabled={pending}
      >
        <FolderPlus className="mr-2 size-4 text-[#e5bd8b]" />
        {pending ? "Adding Category..." : "Add Category"}
      </Button>
    </form>
  );
};

export default CreateCategoryForm;
