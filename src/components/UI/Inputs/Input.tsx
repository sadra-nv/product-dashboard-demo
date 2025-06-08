import { useState, type InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "../../../lib/utils";
import {
  EyeIcon,
  EyeSlashIcon,
  SealWarningIcon,
} from "@phosphor-icons/react/dist/ssr";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  tag: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  className?: string;
}

export default function Input({
  tag,
  dirty,
  error,
  className,
  ...props
}: InputProps) {
  const [passwordVisiblity, setPasswordVisibility] = useState(false);

  const showPasswordHandler = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  return (
    <div className={cn("w-full relative", className)}>
      <div className="w-full relative">
        <label className="text-sm font-medium text-neutral-200">{tag}</label>
        <input
          className="bg-transparent mt-3 focus:ring ring-purple-600 focus:outline-0 w-full rounded-lg h-12 border-2 border-purple-700 px-2"
          {...props}
          type={passwordVisiblity ? "text" : props.type}
        />
        {props.type === "password" && (
          <button
            onClick={showPasswordHandler}
            className="text-neutral-400 absolute top-1/2 -translate-y-1/2 start-4 z-30  "
          >
            {!passwordVisiblity && (
              <EyeIcon size={16} weight="fill" className=" w-4" />
            )}
            {passwordVisiblity && (
              <EyeSlashIcon size={16} weight="fill" className="w-4" />
            )}
          </button>
        )}
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
