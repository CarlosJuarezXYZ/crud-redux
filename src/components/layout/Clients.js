import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "../../features/clients/clientsSlice";
import CardClient from "../UI/CardClient";
import Loading from "../UI/Loading";
import Header from "./Header";

export default function Clients() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.items);
  const status = useSelector((state) => state.clients.status);

  useEffect(()=>{
      dispatch(fetchClients())
  },[]);

  return (
    <ContainerClients>
      <Header />
      <ContainerCards>
        {clients.map((client)=>{
                    return(
                        <CardClient
                        key={client.id}
                        name={client.name}
                        lastname={client.lastName}
                        birthday={client.dateOfBirth}
                        />
                    )
                })}
      </ContainerCards>

      {status === "loading" && <Loading/>}
    </ContainerClients>
  );
}

const ContainerClients = styled.div`
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
