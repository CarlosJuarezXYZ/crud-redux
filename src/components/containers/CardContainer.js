import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function CardContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  height: 500px;
  background-color: ${colors.bgCard};
  border-radius: 20px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  :hover {
    transition: 300ms;
  }
`;
