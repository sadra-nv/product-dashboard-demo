import { SpinnerIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "../../../lib/utils";
import { Button } from "./Button";
import type { ButtonHTMLAttributes } from "react";

type BtnProps = {
  className?: string;
  isSubmitting: boolean;
  isValid: boolean;
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SubmitFormBtn({
  className,
  isSubmitting,
  isValid,
  title,
  ...props
}: BtnProps) {
  return (
    <Button
      {...props}
      disabled={isSubmitting}
      type="submit"
      className={cn(
        "font-semibold w-40 ",
        {
          "": !isValid,
        },
        className
      )}
    >
      {!isSubmitting && (
        <span className="inline-block mx-auto ">{title || "Submit"}</span>
      )}
      {isSubmitting && (
        <span className="inline-block mx-auto ">
          <SpinnerIcon className="animate-spin w-6 min-w-6" />
        </span>
      )}
    </Button>
  );
}
