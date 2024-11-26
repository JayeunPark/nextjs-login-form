"use client";
import { useFormStatus } from "react-dom";

export default function FormBtn() {
  const { pending } = useFormStatus();
  return (
    <>
      <button disabled={pending} className=" px-3 py-2 font-semibold text-xs">
        {pending ? "Loading.." : "Log in"}
      </button>
    </>
  );
}
