import styled from "styled-components";

const PaginationStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.gap};
  margin: 0 auto;
  padding: ${(props) => props.theme.sizes.gap};
  width: fit-content;
`;

export default PaginationStyled;
