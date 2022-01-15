import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateClients } from "../../features/clients/createClientsSlice";
import Button from "../UI/Button";
import InputField from "../UI/Input";
import Header from "./Header";

export default function FormClient(){

    const dispatch = useDispatch();
    
    const [name, setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (e) =>{

        let dataBirthday = birthday.split("-");
        let dateOfBirth =  `${dataBirthday[2]}/${dataBirthday[1]}/${dataBirthday[0]}`
        dispatch(fetchCreateClients({name,lastName,dateOfBirth}))
        console.log("creeme",dateOfBirth);
    }

    return(
        <ContainerGeneral>
            <Header/>
        <Container>
        <FormClients>
            <ContainerInput>
                <p>Name:</p>
                <InputField
                type="text"
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
                />
            </ContainerInput>

            <ContainerInput>
                <p>LastName:</p>
                <InputField
                type="text"
                placeholder="email"
                onChange={(e)=>setLastName(e.target.value)}
                />
            </ContainerInput>

            <ContainerInput>
                <p>Birthday:</p>
                <InputField
                type="date"
                placeholder="Birthday"
                onChange={(e)=>setBirthday(e.target.value)}
                />
            </ContainerInput>

            <Button
            size="medium"
            type="click"
            onClick={()=>handleSubmit()}
            >
                create
            </Button>

            
        </FormClients>
        </Container>
        </ContainerGeneral>
    )
}

const ContainerGeneral = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items: center;
`
const FormClients = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 35%;
height: auto;
border: 1px solid blue;
padding: 0 10px;
`

const ContainerInput = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
margin-bottom: 10px;
`

// const SpanError = styled.span`
// color:red;
// `
