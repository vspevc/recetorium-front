export interface ButtonProps {
  children: JSX.Element;
  action?: () => void;
  options?: ButtonOptions;
}

export interface ButtonStyledProps {
  variant?: "large" | "medium" | "small" | "round" | "mixed";
}

interface ButtonOptions extends ButtonStyledProps {
  as?: "button" | "a" | "label";
  href?: string;
  htmlFor?: string;
  type?: string;
  disabled?: boolean;
}
