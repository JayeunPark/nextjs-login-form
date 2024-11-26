import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col p-10 w-full">
        <form className=" flex flex-col items-center justify-center *:font-medium gap-3">
          <h1 className="text-4xl mb-4">🔥</h1>
          <input
            className="rounded-2xl border-none ring-2 ring-neutral-300 w-1/2"
            type="text"
            placeholder="Email"
            name="name"
            required
          ></input>
          <input
            className="rounded-2xl border-none ring-2 ring-neutral-300 w-1/2"
            type="email"
            placeholder="Username"
            name="name"
            required
          ></input>
          <input
            className="rounded-2xl border-none ring-2 ring-neutral-300 w-1/2"
            type="password"
            placeholder="Password"
            name="name"
            required
          ></input>
          <div className="flex flex-col items-center justify-center w-1/2 rounded-2xl bg-gray-400">
            <Link href="/login" className=" px-3 py-2 ">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
