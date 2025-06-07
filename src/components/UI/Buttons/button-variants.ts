import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "text-sm  font-semibold flex items-center justify-center tran-fast ",
  {
    variants: {
      variant: {
        purple: "hover:bg-purple-600 rounded-lg bg-purple-700 text-neutral-50",
        "purple-outline":
          "rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-600/30",
      },
      size: {
        rounded: "p-2 rounded-full  ",
        md: "min-w-28 px-5 lg:px-8  h-12",
        lg: "min-w-28 lg:min-w-40 px-5 lg:px-8  h-12",
        full: " w-full px-5 lg:px-8  h-12",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "purple",
    },
  }
);
