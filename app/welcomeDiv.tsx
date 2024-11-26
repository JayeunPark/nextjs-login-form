export default function WelcomeDiv() {
  return (
    <div className="relative bg-green-600 rounded-lg text-xs font-extrabold px-7 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-4 absolute left-2"
      >
        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      Welcome back!
    </div>
  );
}
