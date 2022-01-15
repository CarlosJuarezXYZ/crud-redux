import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCreateClients } from "../../features/clients/createClientsSlice";
import Button from "../UI/Button";
import InputField from "../UI/Input";
import Header from "./Header";

export default function FormClient() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [validForm, setValidForm] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    let dataBirthday = birthday.split("-");
    let dateOfBirth = `${dataBirthday[2]}/${dataBirthday[1]}/${dataBirthday[0]}`;
    if (!name || !lastName || !birthday) {
      return setValidForm(true);
    }
    dispatch(fetchCreateClients({ name, lastName, dateOfBirth }));
    history.push("/average");
  };



  return (
    <ContainerGeneral>
      <Header />
      <Container>
        <FormClients>
          {validForm && <SpanError>not field can be empty</SpanError>}
          <ContainerInput>
            <p>Name:</p>
            <InputField
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </ContainerInput>

          <ContainerInput>
            <p>LastName:</p>
            <InputField
              type="text"
              placeholder="Lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </ContainerInput>

          <ContainerInput>
            <p>Birthday:</p>
            <InputField
              type="date"
              placeholder="Birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </ContainerInput>

          <Button size="medium" type="click" onClick={() => handleSubmit()}>
            create
          </Button>
        </FormClients>
      </Container>
    </ContainerGeneral>
  );
}

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormClients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  height: auto;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
`;

const SpanError = styled.span`
  color: red;
  text-align: center;
`;
