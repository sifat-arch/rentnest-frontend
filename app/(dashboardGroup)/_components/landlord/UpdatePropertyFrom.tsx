"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import CategorySelect, { Category } from "./CategorySelect";
import { IProperty } from "@/lib/types";
import { updateProperty } from "../../_actions/updatePropertyAction";
import { Pencil, Sparkles, Loader2, Wand2, CheckCircle2 } from "lucide-react";
import { generateAiListingAction } from "@/service/aiService";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

type Props = {
  property: IProperty;
  categories?: Category[];
};

const UpdatePropertyForm = ({ property, categories }: Props) => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    updateProperty.bind(null, property.id),
    initialState,
  );

  const [title, setTitle] = useState(property.title || "");
  const [description, setDescription] = useState(property.description || "");
  const [location, setLocation] = useState(property.location || "");
  const [price, setPrice] = useState(String(property.price || ""));
  const [image, setImage] = useState(property.image || "");

  const [aiPrompt, setAiPrompt] = useState("");
  const [isAiGenerating, startAiTransition] = useTransition();
  const [aiHighlights, setAiHighlights] = useState<string[]>([]);

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message || "Property updated successfully!");
      router.push("/landlord-dashboard/get-all-properties");
    } else {
      toast.error(state.message || "Failed to update property");
    }
  }, [state, router]);

  const handleEnhanceWithAI = () => {
    startAiTransition(async () => {
      const res = await generateAiListingAction({
        prompt: aiPrompt || `Enhance listing for this property: ${title} in ${location}`,
        title: title || undefined,
        location: location || undefined,
        price: price ? Number(price) : undefined,
      });

      if (res.success && res.data) {
        if (res.data.title) setTitle(res.data.title);
        if (res.data.description) setDescription(res.data.description);
        if (res.data.highlights && Array.isArray(res.data.highlights)) {
          setAiHighlights(res.data.highlights);
        }
        toast.success("✨ Listing enhanced by AI!");
      } else {
        toast.error(res.message || "AI Enhancement failed");
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* AI ENHANCE CARD */}
      <div className="rounded-2xl border border-[#d9a66b]/40 bg-gradient-to-br from-[#18342d]/5 via-[#d9a66b]/10 to-[#f7f6f2] p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#18342d] text-[#d9a66b] shadow-xs shrink-0">
              <Sparkles className="size-4" />
            </span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#18342d]">
                AI Listing Enhancer
              </h4>
              <p className="text-[11px] text-[#64716c]">
                Instantly upgrade description vocabulary and key amenities with AI.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleEnhanceWithAI}
            disabled={isAiGenerating}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#18342d] px-4 py-2 text-xs font-semibold text-[#e5bd8b] shadow-xs transition hover:bg-[#122822] disabled:opacity-60 cursor-pointer shrink-0"
          >
            {isAiGenerating ? (
              <>
                <Loader2 className="size-3.5 animate-spin" />
                <span>Enhancing...</span>
              </>
            ) : (
              <>
                <Wand2 className="size-3.5 text-[#d9a66b]" />
                <span>Enhance with AI</span>
              </>
            )}
          </button>
        </div>

        {aiHighlights.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-[#e7e5df]/60 flex flex-wrap gap-1.5 items-center">
            <span className="text-[10px] font-semibold text-[#18342d]">
              AI Key Highlights:
            </span>
            {aiHighlights.map((hl, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-[#18342d] border border-[#e7e5df]"
              >
                <CheckCircle2 className="size-3 text-emerald-600" />
                {hl}
              </span>
            ))}
          </div>
        )}
      </div>

      <form
        action={formAction}
        className="space-y-6 rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs"
      >
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-xs font-semibold text-[#18342d]">
            Listing Title
          </Label>
          <Input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Property title"
            className="h-11 rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
          />
          {state.errors?.title && (
            <p className="text-xs font-medium text-rose-600">
              {state.errors.title[0]}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-xs font-semibold text-[#18342d]">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-xl border border-[#e7e5df] bg-white p-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d] leading-relaxed"
          />
          {state.errors?.description && (
            <p className="text-xs font-medium text-rose-600">
              {state.errors.description[0]}
            </p>
          )}
        </div>

        {/* Grid: Image and Location */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="image" className="text-xs font-semibold text-[#18342d]">
              Cover Photo URL
            </Label>
            <Input
              id="image"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="h-11 rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
            />
            {state.errors?.image && (
              <p className="text-xs font-medium text-rose-600">
                {state.errors.image[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-xs font-semibold text-[#18342d]">
              Location
            </Label>
            <Input
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Dhaka"
              className="h-11 rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
            />
            {state.errors?.location && (
              <p className="text-xs font-medium text-rose-600">
                {state.errors.location[0]}
              </p>
            )}
          </div>
        </div>

        {/* Grid: Price and Category */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="price" className="text-xs font-semibold text-[#18342d]">
              Monthly Price (৳)
            </Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-11 rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
            />
            {state.errors?.price && (
              <p className="text-xs font-medium text-rose-600">
                {state.errors.price[0]}
              </p>
            )}
          </div>

          <CategorySelect
            defaultValue={property.categoryId}
            categories={categories}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={pending}
          className="h-12 w-full rounded-xl bg-[#18342d] text-sm font-semibold text-white shadow-xs transition hover:bg-[#102b25] disabled:opacity-50 cursor-pointer"
        >
          <Pencil className="mr-2 size-4 text-[#e5bd8b]" />
          {pending ? "Saving Changes..." : "Save Property Changes"}
        </Button>
      </form>
    </div>
  );
};

export default UpdatePropertyForm;
