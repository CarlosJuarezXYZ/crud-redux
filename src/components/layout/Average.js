import styled from "@emotion/styled"
import Header from "./Header"

export default function Average(){
    return(
        <Container>
             <Header/>
        <ContainerAverage>
            <Text>PROMEDIO DE EDAD DE LOS CLIENTES</Text>
        </ContainerAverage>
        </Container>
        
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const ContainerAverage = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
`

const Text = styled.p`
font-size: 30px;
`
