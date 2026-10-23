import CreatePropertyForm from "../../_components/landlord/CreateProperty";
import { getCategories } from "../../_actions/getCategories";
import {
  Camera,
  DollarSign,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const CreateProperty = async () => {
  const categoriesResult = await getCategories();
  const categories =
    categoriesResult?.success && Array.isArray(categoriesResult?.data)
      ? categoriesResult.data
      : [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
          <span className="h-px w-6 bg-[#d9a66b]" />
          Host Publishing Studio
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
          List a New <em className="font-serif italic font-normal">Property</em>
        </h1>
        <p className="mt-1 text-xs text-[#64716c]">
          Enter your accommodation details to attract verified, qualified tenants across RentNest.
        </p>
      </div>

      {/* Grid: Form (Left 2 cols) & Guidelines (Right 1 col) */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Side: Form */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
            <CreatePropertyForm categories={categories} />
          </div>
        </div>

        {/* Right Side: Host Guidelines & Verification */}
        <div className="space-y-6">
          {/* Best Practices Card */}
          <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b77940]">
              <Sparkles className="size-4 text-[#d9a66b]" />
              Listing Best Practices
            </div>

            <div className="space-y-3.5 text-xs text-[#64716c]">
              <div className="flex items-start gap-3">
                <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#18342d]/5 text-[#18342d]">
                  <Camera className="size-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-[#18342d]">Bright Photos</p>
                  <p className="mt-0.5">High-quality, natural-light images get 3x more verified booking inquiries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#18342d]/5 text-[#18342d]">
                  <DollarSign className="size-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-[#18342d]">Fair Market Rent</p>
                  <p className="mt-0.5">Competitive pricing based on your neighborhood keeps vacancies to minimum.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#18342d]/5 text-[#18342d]">
                  <FileText className="size-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-[#18342d]">Transparent Rules</p>
                  <p className="mt-0.5">List utility responsibilities, parking, and pet policies explicitly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Host Assurance Card */}
          <div className="rounded-3xl border border-[#18342d]/10 bg-gradient-to-br from-[#18342d] to-[#102b25] p-6 text-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5bd8b]">
              <ShieldCheck className="size-4" />
              RentNest Host Guarantee
            </div>
            <p className="text-xs leading-relaxed text-white/80">
              Your listings are backed by verified tenant identity checks, structured rental agreements, and prompt payout transfers upon booking approval.
            </p>
            <div className="pt-2 text-[11px] text-[#e5bd8b]">
              ✓ Full booking payment protection included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;
