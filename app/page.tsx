"use client";
import FormInput from "./formInput";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/20/solid";
import FormBtn from "./formBtn";
import FormAction from "./formAction";
import { useActionState } from "react";
import WelcomeDiv from "./welcomeDiv";

export default function Home() {
  const [state, action] = useActionState(FormAction, null);

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-10 w-full">
        <h1 className="text-4xl mb-4">🔥</h1>
        <form
          action={action}
          className=" flex flex-col  *:font-medium gap-5  w-[60%]"
        >
          <label className="relative justify-center  rounded-3xl bg-inherit  w-full ">
            <EnvelopeIcon className=" absolute size-3 top-[15px] left-[14px]  pointer-events-none text-neutral-500" />
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              required={true}
              error={state?.fieldErrors.email}
            />
          </label>
          <label className="relative justify-center  rounded-3xl bg-inherit  w-full ">
            <UserIcon className=" absolute size-3 top-[15px] left-[14px]  pointer-events-none text-neutral-500" />
            <FormInput
              type="text"
              placeholder="Username"
              name="username"
              required={true}
              error={state?.fieldErrors.username}
            />
          </label>
          <label className="relative justify-center  rounded-3xl bg-inherit w-full ">
            <KeyIcon className=" absolute size-3 top-[15px] left-[14px]  pointer-events-none text-neutral-500" />
            <FormInput
              type="password"
              placeholder="Password"
              name="password"
              required={true}
              error={state?.fieldErrors.password}
            />
          </label>

          <div className="flex flex-col items-center justify-center rounded-3xl bg-neutral-300 ">
            <FormBtn />
          </div>
          {state === null ? "" : state?.fieldErrors ? "" : <WelcomeDiv />}
        </form>
      </div>
    </div>
  );
}
