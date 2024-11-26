interface IFormInput {
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
}

export default function FormInput({
  type,
  placeholder,
  name,
  required,
}: IFormInput) {
  return (
    <>
      <input
        className="focus:outline focus:outline-offset-4 focus:outline-neutral-400 focus:ring-neutral-300 ring-1 ring-neutral-300 border-none
              rounded-3xl w-full
              px-8
              placeholder:text-neutral-400 placeholder:text-xs placeholder:font-semibold"
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      ></input>
    </>
  );
}
