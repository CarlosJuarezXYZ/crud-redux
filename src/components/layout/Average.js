import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsProm } from "../../features/clients/promClientsSlice";
import Header from "./Header";

export default function Average() {
  const dispatch = useDispatch();
  const average = useSelector((state) => state.average.items);

  useEffect(()=>{
      dispatch(fetchClientsProm());
  },[]);
  return (
    <Container>
      <Header />
      <ContainerAverage>
        <Text>The average age of your customers is {average.averageAge}</Text>
      </ContainerAverage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContainerAverage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;

const Text = styled.p`
  font-size: 30px;
`;
