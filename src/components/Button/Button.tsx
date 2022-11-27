import ButtonStyled from "./ButtonStyled";
import { ButtonProps } from "./types";

const Button = ({
  children,
  action,
  className = "",
  as = "button",
  options = {},
}: ButtonProps): JSX.Element => {
  const extraClassName = className ? ` ${className}` : "";
  return (
    <ButtonStyled
      className={`button${extraClassName}`}
      onClick={action}
      as={as}
      {...options}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
