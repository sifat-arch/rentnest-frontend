import { FolderTree, Tag, Sparkles } from "lucide-react";
import { getCategories } from "../../_actions/getCategories";

const GetCategoriesCard = async () => {
  const result = await getCategories();

  return (
    <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between border-b border-[#e7e5df] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b77940]">
              Taxonomy
            </span>
            <Sparkles className="size-3 text-[#d9a66b]" />
          </div>
          <h2 className="mt-1 text-xl font-semibold text-[#18342d]">
            Available Categories
          </h2>
          <p className="mt-1 text-xs text-[#64716c]">
            Active property categories available for landlords when publishing accommodations.
          </p>
        </div>

        <div className="grid size-11 place-items-center rounded-2xl bg-[#18342d]/5 text-[#18342d]">
          <FolderTree className="size-5" />
        </div>
      </div>

      <div className="pt-6">
        {!result.success || result.data.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#e7e5df] p-8 text-center text-xs text-[#64716c]">
            No categories defined yet. Use the form on the left to create the first one.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5">
            {result.data.map((category: { id: string; name: string }) => (
              <span
                key={category.id}
                className="group flex items-center gap-2 rounded-full border border-[#e7e5df] bg-[#f7f6f2] px-4 py-2 text-xs font-semibold text-[#18342d] transition-all hover:border-[#18342d] hover:bg-[#18342d] hover:text-white"
              >
                <Tag className="size-3 text-[#b77940] transition-colors group-hover:text-[#e5bd8b]" />
                {category.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetCategoriesCard;
