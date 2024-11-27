import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function WelcomeDiv() {
  return (
    <div className="w-full flex items-center gap-4 py-3 pl-7 rounded-2xl bg-green-500">
      <CheckCircleIcon className="size-5 stroke-2" />
      <span className="font-semibold">Welcome back!</span>
    </div>
  );
}
