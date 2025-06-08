import type { SelectOption } from "../components/UI/Inputs/Select";

export const PRODUCT_SIZES = ["S", "M", "L", "XL", "2XL"] as const;
export const PRODUCT_COLORS = ["Red", "Blue", "White", "Black"] as const;

export const PRODUCT_SIZE_OPTIONS: SelectOption[] = PRODUCT_SIZES.map(
  (size) => ({
    label: size,
    value: size,
  })
);

export const PRODUCT_COLOR_OPTIONS: SelectOption[] = PRODUCT_COLORS.map(
  (color) => ({
    label: color,
    value: color,
  })
);
