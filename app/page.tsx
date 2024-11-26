import Link from "next/link";
import FormInput from "./formInput";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/20/solid";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col p-10 w-full">
        <form className=" flex flex-col items-center justify-center *:font-medium gap-5">
          <h1 className="text-4xl mb-4">🔥</h1>
          <label className="relative justify-center  rounded-3xl bg-white w-[60%]">
            <EnvelopeIcon className=" absolute size-3 top-[15px] left-[14px]  pointer-events-none text-neutral-500" />
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              required={true}
            />
          </label>
          <label className="relative justify-center  rounded-3xl bg-white w-[60%]">
            <UserIcon className=" absolute size-3 top-[15px] left-[14px]  pointer-events-none text-neutral-500" />
            <FormInput
              type="text"
              placeholder="Username"
              name="username"
              required={true}
            />
          </label>
          <label className="relative justify-center  rounded-3xl bg-white w-[60%]">
            <KeyIcon className=" absolute size-3 top-[15px] left-[14px]  pointer-events-none text-neutral-500" />
            <FormInput
              type="password"
              placeholder="Password"
              name="password"
              required={true}
            />
          </label>

          <div className="flex flex-col items-center justify-center rounded-3xl bg-neutral-300 w-[60%]">
            <Link href="/login" className=" px-3 py-2 font-semibold text-xs">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
