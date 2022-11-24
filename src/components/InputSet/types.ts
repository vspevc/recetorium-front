export interface InputSetStyledProps {
  isDisabled?: boolean;
  isError?: boolean;
}

export interface InputSetProps {
  id: string;
  labelText: string;
  handleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  captionText?: string;
  options?: InputSetStyledProps;
}
