import { Navbar } from "@/components/shaired/Navbar";
import { getMe } from "../(authGroup)/_actions/getMe";
import { Suspense } from "react";
import GlobalLoading from "../loading";
import NestBotChatbot from "@/components/ai/NestBotChatbot";

export const dynamic = "force-dynamic";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
  return (
    <div>
      <Navbar user={user} />
      <Suspense fallback={<GlobalLoading />}>{children}</Suspense>
      <NestBotChatbot />
    </div>
  );
};

export default PublicGroupLayout;
