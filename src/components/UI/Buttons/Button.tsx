import { type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
import { buttonVariants } from "./button-variants";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
