import styled from "@emotion/styled";
import { colors } from "../../ui";
import CardContainer from "../containers/CardContainer";
import Button from "./Button";
import ImageClient from "./ImageClient";

export default function CardClient({ name, lastname, birthday }) {
 
  return (
    <CardContainer>
      <ContainerImage>
        <ImageClient />
      </ContainerImage>
      <ContainerOptions>
        <Text>
          <TextBold>Name:</TextBold> {name}
        </Text>
        <Text>
          <TextBold>LastName:</TextBold> {lastname}
        </Text>
        <Text>
          <TextBold>Birthday:</TextBold> {birthday}
        </Text>
      </ContainerOptions>
      <ContainerButton>
        <Button
          // onClick={onClick}
          size="medium"
          bg={colors.bgButton}
          color={colors.text}
        >
          Editar
        </Button>
      </ContainerButton>
    </CardContainer>
  );
}

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 12px;
  margin-bottom: 10px;
  color: ${colors.textCard};
`;

const Text = styled.p`
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const TextBold = styled.p`
  color: black;
  font-weight: bold;
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: ${colors.textCard};
`;
