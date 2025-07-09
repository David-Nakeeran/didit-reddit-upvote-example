import { LoginButton } from "@/components/LoginButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PostLikeUserNotLoggedPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-10">
      You need to login to like or dislike a post <LoginButton />
    </div>
  );
}
