import LogoutButton from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-guard";
import Image from "next/image";

export async function Home() {
  const session = await requireAuth();

  const { user } = session;

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-zinc-900">
      <Image src={user.image!} alt="userimage" className="h-50 w-50 object-contain" height={50} width={50} />
      <h2 className="text-3xl text-white font-bold mt-5">{user.name}</h2>
      <LogoutButton />
    </div>
  );
}


export default Home;
