import { getProperty } from "@/app/(dashboardGroup)/_actions/getProperty";
import UpdatePropertyForm from "@/app/(dashboardGroup)/_components/landlord/UpdatePropertyFrom";

type Props = {
  params: Promise<{
    propertyId: string;
  }>;
};

const UpdatePropertyPage = async ({ params }: Props) => {
  const { id } = await params;

  const result = await getProperty(id);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border bg-background p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Update Property</h1>

        <p className="text-muted-foreground">
          Update your property information.
        </p>
      </div>

      <UpdatePropertyForm property={result.data} />
    </div>
  );
};

export default UpdatePropertyPage;
