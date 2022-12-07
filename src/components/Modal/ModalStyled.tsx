import styled from "styled-components";

const ModalStyled = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.inkColor.base};
    opacity: 80%;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${(props) =>
      `${props.theme.sizes.mainElementVerticalPadding} ${props.theme.sizes.mobileHorizontalPadding}`};
    width: min(370px, calc(100vw - 16px));
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.backgroundColor.base};
  }
`;

export default ModalStyled;
