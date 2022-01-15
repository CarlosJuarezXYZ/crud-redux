import styled from "@emotion/styled";
import { colors } from "../../ui";
import Tab from "../UI/Tab";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <StyledNavar>
      <ContainerLink>
        <Link to="/">
          <Tab>Create</Tab>
        </Link>
      </ContainerLink>

      <ContainerLink>
        <Link to="/clients">
          <Tab>Clients</Tab>
        </Link>
      </ContainerLink>

      <ContainerLink>
        <Link to="/average">
          <Tab>Average</Tab>
        </Link>
      </ContainerLink>
    </StyledNavar>
  );
}

const StyledNavar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${colors.text};
  width: 100%;
  height: auto;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: inherit;
    width: 100%;
  }
`;

const ContainerLink = styled.div`
  width: 30%;
  height: auto;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
