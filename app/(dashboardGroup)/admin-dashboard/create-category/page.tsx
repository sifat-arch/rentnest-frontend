import React from "react";
import CreateCategoryForm from "../../_components/admin/createPropertyFrom";
import GetCategoriesCard from "../../_components/admin/GetCategoriesCard";

const CreateCategory = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-[#e7e5df] bg-white p-6 sm:p-8 shadow-xs">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b77940]">
          <span className="h-px w-6 bg-[#d9a66b]" />
          Platform Classification
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#18342d] sm:text-4xl">
          Property <em className="font-serif italic font-normal">Categories</em>
        </h1>
        <p className="mt-1 text-xs text-[#64716c]">
          Structure property types to give tenants intuitive search filters across listings.
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Create Form */}
        <div className="lg:col-span-1">
          <CreateCategoryForm />
        </div>

        {/* Categories List */}
        <div className="lg:col-span-2">
          <GetCategoriesCard />
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
