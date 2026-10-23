"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { createProperty } from "../../_actions/createProperty";
import CategorySelect, { Category } from "./CategorySelect";
import { HousePlus, Sparkles, Loader2, CheckCircle2, Wand2 } from "lucide-react";
import { generateAiListingAction } from "@/service/aiService";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

type CreatePropertyFormProps = {
  categories?: Category[];
};

const CreatePropertyForm = ({ categories }: CreatePropertyFormProps) => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    createProperty,
    initialState,
  );

  // Controlled form state for AI Auto-Fill
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // AI Assistant States
  const [aiPrompt, setAiPrompt] = useState("");
  const [isAiGenerating, startAiTransition] = useTransition();
  const [aiHighlights, setAiHighlights] = useState<string[]>([]);
  const [showAiPanel, setShowAiPanel] = useState(true);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message || "Property created successfully!");
      router.push("/landlord-dashboard/get-all-properties");
    } else {
      toast.error(state.message || "Failed to create property");
    }
  }, [state, router]);

  const handleGenerateListing = () => {
    if (!aiPrompt && !title && !location) {
      toast.info("Please enter a few keywords or a location for AI to work with.");
      return;
    }

    startAiTransition(async () => {
      const res = await generateAiListingAction({
        prompt: aiPrompt,
        title: title || undefined,
        location: location || undefined,
        price: price ? Number(price) : undefined,
      });

      if (res.success && res.data) {
        if (res.data.title) setTitle(res.data.title);
        if (res.data.description) setDescription(res.data.description);
        if (res.data.suggestedPrice && !price) {
          setPrice(String(res.data.suggestedPrice));
        }
        if (res.data.highlights && Array.isArray(res.data.highlights)) {
          setAiHighlights(res.data.highlights);
        }
        toast.success("✨ Listing generated and auto-filled by AI!");
      } else {
        toast.error(res.message || "Failed to generate AI listing");
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* AI SMART LISTING GENERATOR PANEL */}
      <div className="rounded-2xl border border-[#d9a66b]/40 bg-gradient-to-br from-[#18342d]/5 via-[#d9a66b]/10 to-[#f7f6f2] p-5 shadow-xs transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#18342d] text-[#d9a66b] shadow-xs">
              <Sparkles className="size-4.5" />
            </span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#18342d] flex items-center gap-1.5">
                AI Listing Assistant
                <span className="rounded-full bg-[#18342d] px-2 py-0.5 text-[9px] font-semibold text-[#e5bd8b]">
                  Auto-Fill
                </span>
              </h3>
              <p className="text-[11px] text-[#64716c]">
                Describe your place in a few words and AI will draft an elegant, high-converting listing.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowAiPanel(!showAiPanel)}
            className="text-xs font-semibold text-[#18342d] hover:text-[#b77940] transition cursor-pointer"
          >
            {showAiPanel ? "Hide" : "Show"}
          </button>
        </div>

        {showAiPanel && (
          <div className="mt-4 space-y-3 pt-3 border-t border-[#e7e5df]/60">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="e.g. 3-bedroom luxury flat in Banani with modern kitchen, 2 balconies and standby generator"
                disabled={isAiGenerating}
                className="flex-1 rounded-xl border border-[#e7e5df] bg-white px-3.5 py-2.5 text-xs text-[#18342d] placeholder:text-[#8a9691] focus:border-[#18342d] focus:outline-none focus:ring-2 focus:ring-[#18342d]/10"
              />
              <button
                type="button"
                onClick={handleGenerateListing}
                disabled={isAiGenerating}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#18342d] px-4 py-2.5 text-xs font-semibold text-[#e5bd8b] shadow-xs transition hover:bg-[#122822] disabled:opacity-60 cursor-pointer shrink-0"
              >
                {isAiGenerating ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="size-3.5 text-[#d9a66b]" />
                    <span>Auto-Fill with AI</span>
                  </>
                )}
              </button>
            </div>

            {/* Generated AI Highlights Badge list */}
            {aiHighlights.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-semibold text-[#18342d]">
                  Suggested Features:
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
        )}
      </div>

      <form action={formAction} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-xs font-semibold text-[#18342d]">
            Listing Title
          </Label>
          <Input
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Modern Minimalist Apartment in Gulshan"
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
            Detailed Description
          </Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe room layout, natural light, security, amenities, and lease conditions..."
            className="rounded-xl border border-[#e7e5df] bg-white p-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d] leading-relaxed"
          />
          {state.errors?.description && (
            <p className="text-xs font-medium text-rose-600">
              {state.errors.description[0]}
            </p>
          )}
        </div>

        {/* Grid: Image URL and Location */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="image" className="text-xs font-semibold text-[#18342d]">
              Cover Photo URL
            </Label>
            <Input
              id="image"
              name="image"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://images.unsplash.com/..."
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
              Location / Neighborhood
            </Label>
            <Input
              id="location"
              name="location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Banani, Dhaka"
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
              Monthly Rent (৳ BDT)
            </Label>
            <Input
              id="price"
              name="price"
              type="number"
              required
              min="1"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 35000"
              className="h-11 rounded-xl border border-[#e7e5df] bg-white px-3.5 text-sm text-[#18342d] placeholder:text-[#64716c]/60 focus-visible:border-[#18342d] focus-visible:ring-1 focus-visible:ring-[#18342d]"
            />
            {state.errors?.price && (
              <p className="text-xs font-medium text-rose-600">
                {state.errors.price[0]}
              </p>
            )}
          </div>

          <CategorySelect categories={categories} />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={pending}
          className="h-12 w-full rounded-xl bg-[#18342d] text-sm font-semibold text-white shadow-xs transition hover:bg-[#102b25] disabled:opacity-50 cursor-pointer"
        >
          <HousePlus className="mr-2 size-4 text-[#e5bd8b]" />
          {pending ? "Publishing Property..." : "Publish Property Listing"}
        </Button>
      </form>
    </div>
  );
};

export default CreatePropertyForm;
