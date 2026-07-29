import { Navbar } from "@/components/shaired/Navbar";
import { getMe } from "../(authGroup)/_actions/getMe";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
};

export default PublicGroupLayout;
