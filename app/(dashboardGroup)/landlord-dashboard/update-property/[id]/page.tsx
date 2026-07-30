import UpdatePropertyForm from "../../_components/landlord/UpdatePropertyForm";
import { getProperty } from "../../_actions/getProperty";

type Props = {
  params: Promise<{
    propertyId: string;
  }>;
};

const UpdatePropertyPage = async ({ params }: Props) => {
  const { propertyId } = await params;

  const result = await getProperty(propertyId);

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
