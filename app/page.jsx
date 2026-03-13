import UserButton from "@/src/modules/authentication/components/user-button";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  if (!user) {
    redirect("/sign-in");
  }

  return (
   <div className="flex flex-col items-center justify-center h-screen">
    <UserButton user={user} />
   </div>
  );
}
