"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { createProperty } from "../../_actions/createProperty";
import CategorySelect from "./CategorySelect";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

const CreatePropertyForm = () => {
  const [state, formAction, pending] = useActionState(
    createProperty,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>

        <Input id="title" name="title" placeholder="Property title" />

        {state.errors?.title && (
          <p className="text-sm text-red-500">{state.errors.title[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>

        <Textarea id="description" name="description" rows={5} />

        {state.errors?.description && (
          <p className="text-sm text-red-500">{state.errors.description[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>

        <Input
          id="image"
          name="image"
          placeholder="https://example.com/image.jpg"
        />

        {state.errors?.image && (
          <p className="text-sm text-red-500">{state.errors.image[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>

        <Input id="location" name="location" placeholder="Dhaka" />

        {state.errors?.location && (
          <p className="text-sm text-red-500">{state.errors.location[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>

        <Input id="price" name="price" type="number" />

        {state.errors?.price && (
          <p className="text-sm text-red-500">{state.errors.price[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <CategorySelect />
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Creating..." : "Create Property"}
      </Button>
    </form>
  );
};

export default CreatePropertyForm;
