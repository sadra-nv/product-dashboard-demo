import { SpinnerIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "../../../lib/utils";
import { Button } from "./Button";

export default function SubmitFormBtn({
  className,
  isSubmitting,
  isValid,
}: {
  className?: string;
  isSubmitting: boolean;
  isValid: boolean;
}) {
  return (
    <Button
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
      {!isSubmitting && <span className="inline-block mx-auto ">Submit</span>}
      {isSubmitting && (
        <span className="inline-block mx-auto ">
          <SpinnerIcon className="animate-spin w-6 min-w-6" />
        </span>
      )}
    </Button>
  );
}
