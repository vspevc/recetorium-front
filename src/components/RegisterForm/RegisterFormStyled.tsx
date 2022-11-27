import styled from "styled-components";

const RegisterFormStyled = styled.div`
  .register-form {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.gap};
    margin: 0 auto;
    max-width: 430px;

    &__button {
      margin-top: 20px;
      align-self: baseline;
    }

    @media screen and (min-width: 900px) {
      padding: ${(props) => props.theme.sizes.mainElementVerticalPadding};
      border: 1px solid ${(props) => props.theme.color.backgroundColor.darkest};
      border-radius: 8px;
      background-color: ${(props) => props.theme.color.backgroundColor.light};
    }
  }
`;

export default RegisterFormStyled;
