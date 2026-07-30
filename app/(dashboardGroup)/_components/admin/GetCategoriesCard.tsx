import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { FolderTree } from "lucide-react";

import { getCategories } from "../../_actions/getCategories";

const GetCategoriesCard = async () => {
  const result = await getCategories();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Property Categories</CardTitle>

            <CardDescription>
              Available categories for creating properties
            </CardDescription>
          </div>

          <FolderTree className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>

      <CardContent>
        {!result.success || result.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">No categories found.</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {result.data.map((category: { id: string; name: string }) => (
              <Badge
                key={category.id}
                variant="secondary"
                className="rounded-full px-4 py-2 text-sm"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GetCategoriesCard;
