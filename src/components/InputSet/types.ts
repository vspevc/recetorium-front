export interface InputSetStyledProps {
  isDisabled?: boolean;
  isError?: boolean;
}

export interface InputSetProps {
  id: string;
  labelText: string;
  handleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  inputType?: "text" | "password" | "email";
  required?: boolean;
  captionText?: string;
  options?: InputSetStyledProps;
}
