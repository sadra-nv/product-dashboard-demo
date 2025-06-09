import { SpinnerGapIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "../../../lib/utils";

export default function SpinnerSec({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-80 w-full flex justify-center items-center", className)}
    >
      <SpinnerGapIcon
        size={64}
        className="w-16 min-w-16 animate-spin text-purple-600"
      />
    </div>
  );
}
