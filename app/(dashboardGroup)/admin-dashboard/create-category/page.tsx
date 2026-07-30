import React from "react";
import CreateCategoryForm from "../../_components/admin/createPropertyFrom";
import GetCategoriesCard from "../../_components/admin/GetCategoriesCard";

const CreateCategory = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Property Categories
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Create and manage property categories for your platform.
        </p>
      </div>

      {/* Content */}
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
