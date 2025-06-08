import { type TextareaHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "../../../lib/utils";
import { SealWarningIcon } from "@phosphor-icons/react/dist/ssr";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  tag: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  className?: string;
}

export default function TextArea({
  tag,
  dirty,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className={cn("w-full relative", className)}>
      <div className="w-full relative">
        <label
          htmlFor={tag}
          className="text-sm mb-3 font-medium text-neutral-200"
        >
          {tag}
        </label>
        <textarea
          id={tag}
          className={cn(
            "bg-transparent mt-3 min-h-80 focus:ring ring-purple-600 ",
            "focus:outline-0 w-full rounded-lg  border-2 border-purple-700 px-2 py-4",
            {
              "border-red-600 focus:ring-red-600": error && dirty,
            }
          )}
          {...props}
        />
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
