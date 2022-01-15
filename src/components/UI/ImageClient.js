import styled from "@emotion/styled";

export default function ImagenHeroe({url="https://us.123rf.com/450wm/ylivdesign/ylivdesign1506/ylivdesign150604022/41529412-icono-de-usuario-gris-en-c%C3%ADrculo-sobre-fondo-blanco-degradado.jpg"}) {
  return <StyledHeroe url={url} />;
}

const StyledHeroe = styled.div`
  width: 90%;
  height: 200px;
  border: none;
  background-image: url(${(props) => `${props.url}`});
  background-size: 100% 100%;
  border-radius: 10px;
`;
