import ButtonStyled from "./ButtonStyled";
import { ButtonProps } from "./types";

const Button = ({
  children,
  action = () => {},
  as = "button",
  options = {},
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} as={as} {...options}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
