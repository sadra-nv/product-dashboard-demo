import type { FieldError } from "react-hook-form";

export interface RHFFieldProps {
  tag: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  className?: string;
}
