import Image from "next/image";
import { GetUserList } from "@/lib/data";
import { updateTheList } from "@/actions";

interface User {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

export default async function Home() {
  const data = await GetUserList();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-zinc-950 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Users
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm">
          {data.length} members
        </p>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        {data.map((user: User, index: Number) => (
          <div
            key={user.id}
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <Image
              src={user.avatar}
              alt={user.name}
              width={72}
              height={72}
              className="rounded-full ring-2 ring-zinc-100 dark:ring-zinc-800 object-cover"
            />
            <div>{user.id}</div>
            <div className="text-center">
              <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
                {user.name}
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                Joined{" "}
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <form action={updateTheList}>
        <button>Refresh Users</button>
      </form>
    </div>
  );
}
