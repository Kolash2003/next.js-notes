import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Welcome</h1>
    </div>

  );
}
