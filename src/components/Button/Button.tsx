import ButtonStyled from "./ButtonStyled";
import { ButtonProps } from "./types";

const Button = ({
  children,
  action = () => {},
  options = { as: "button" },
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} {...options}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
