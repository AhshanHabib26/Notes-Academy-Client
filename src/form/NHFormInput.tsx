import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const NHFormInput = ({ name, placeholder, type, required }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className="w-full h-[50px] border border-gray-300 text-[#001D25] text-lg hind-siliguri-regular outline-none mb-3 rounded-md p-2"
        />
      )}
    />
  );
};

export default NHFormInput;
