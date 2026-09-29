import { createUser, getUser } from "@/actions/action";

export default async function Home() {
  const data = await getUser();
  console.log(data);

  return (
    <div>
      <h1>Create user</h1>
      <form action={createUser}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          required
        />
        <button
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
