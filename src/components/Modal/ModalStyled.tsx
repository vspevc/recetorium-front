import styled from "styled-components";

const ModalStyled = styled.div`
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.color.inkColor.base};
    opacity: 80%;
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${(props) =>
      `${props.theme.sizes.mainElementVerticalPadding} ${props.theme.sizes.mobileHorizontalPadding}`};
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.backgroundColor.base};
  }
`;

export default ModalStyled;
