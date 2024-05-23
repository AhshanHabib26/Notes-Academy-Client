import { Controller, useFormContext } from "react-hook-form";

type TTextareaProps = {
  name: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  required?: boolean;
};

const NHFormTextarea = ({
  name,
  placeholder,
  cols,
  rows,
  required,
}: TTextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <textarea
          {...field}
          placeholder={placeholder}
          required={required}
          cols={cols}
          rows={rows}
          className="w-full border outline-none rounded-md p-2 border-gray-300 text-[#001D25] text-lg hind-siliguri-regular resize-none"
        />
      )}
    />
  );
};

export default NHFormTextarea;
