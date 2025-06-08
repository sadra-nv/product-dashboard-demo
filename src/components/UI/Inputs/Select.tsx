import { type SelectHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
import { SealWarningIcon } from "@phosphor-icons/react/dist/ssr";
import type { RHFFieldProps } from "../../../lib/types";

export type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = { options: SelectOption[] } & RHFFieldProps &
  SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  tag,
  dirty,
  error,
  className,
  options,
  ...props
}: SelectProps) {
  return (
    <div className={cn("w-full relative", className)}>
      <div className="w-full relative">
        <label
          htmlFor={tag}
          className="text-sm mb-3 font-medium text-neutral-200"
        >
          {tag}
        </label>
        <select
          defaultValue={1}
          id={tag}
          className={cn(
            "bg-transparent mt-3 h-12 text-purple-600 focus:ring ring-purple-600 ",
            "focus:outline-0 w-full rounded-lg  border-2 border-purple-700 px-2 ",
            {
              "border-red-600 focus:ring-red-600": error && dirty,
            }
          )}
          {...props}
        >
          {options.map((opt) => (
            <option
              className="max-w-full h-12 truncate"
              key={opt.value}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <p
        className={cn("hidden", {
          " mt-3 gap-2 block text-xs  text-red-600": error && dirty,
        })}
      >
        <SealWarningIcon
          size={14}
          weight="fill"
          className="mr-1.5 inline-block"
        />
        {error?.message}
      </p>
    </div>
  );
}
