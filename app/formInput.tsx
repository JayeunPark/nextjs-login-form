interface IFormInput {
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
  error?: string[];
}

export default function FormInput({
  type,
  placeholder,
  name,
  required,
  error,
}: IFormInput) {
  return (
    <>
      <input
        className={`focus:outline focus:outline-offset-4 ring-1 ring-neutral-300 border-none
              rounded-3xl w-full
              px-8
              placeholder:text-neutral-400 placeholder:text-xs placeholder:font-semibold
              ${
                error
                  ? "focus:outline-red-400 ring-1 focus:ring-red-500"
                  : " focus:outline-neutral-400 focus:ring-neutral-300"
              }`}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      />
      <span className="text-red-500 bg-inherit text-xs font-semibold">
        {error}
      </span>
    </>
  );
}
