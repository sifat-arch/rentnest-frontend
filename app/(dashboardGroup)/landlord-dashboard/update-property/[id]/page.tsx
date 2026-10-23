import { getProperty } from "@/app/(dashboardGroup)/_actions/getProperty";
import { getCategories } from "@/app/(dashboardGroup)/_actions/getCategories";
import UpdatePropertyForm from "@/app/(dashboardGroup)/_components/landlord/UpdatePropertyFrom";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const UpdatePropertyPage = async ({ params }: Props) => {
  const { id } = await params;
  const [propertyResult, categoriesResult] = await Promise.all([
    getProperty(id),
    getCategories(),
  ]);

  const categories =
    categoriesResult?.success && Array.isArray(categoriesResult?.data)
      ? categoriesResult.data
      : [];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
          <span className="h-px w-6 bg-[#d9a66b]" />
          Listing Editor
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
          Update <em className="font-serif italic font-normal">Property Details</em>
        </h1>
        <p className="mt-1 text-xs text-[#64716c]">
          Modify price, location, photos, or description for this listing.
        </p>
      </div>

      <UpdatePropertyForm
        property={propertyResult.data}
        categories={categories}
      />
    </div>
  );
};

export default UpdatePropertyPage;
