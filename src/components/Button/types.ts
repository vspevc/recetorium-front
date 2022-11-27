export interface ButtonProps {
  children: JSX.Element | string;
  action?: () => void;
  className?: string;
  as?: "button" | "a" | "label";
  options?: ButtonOptions;
}

export interface ButtonStyledProps {
  variant?: "large" | "medium" | "small" | "round" | "mixed";
}

interface ButtonOptions extends ButtonStyledProps {
  href?: string;
  htmlFor?: string;
  type?: string;
  disabled?: boolean;
}
