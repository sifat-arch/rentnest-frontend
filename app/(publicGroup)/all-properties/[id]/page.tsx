import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AllPropertiesIdRedirect({ params }: Props) {
  const { id } = await params;
  redirect(`/properties/${id}`);
}
