import styled from "@emotion/styled";

export default function ContainerLogos() {
  const logos = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      view: false,
    },
    {
      id: 2,
      src: "https://static.wikia.nocookie.net/logopedia/images/7/7f/Ripley_logo_R_con_fondo_1993-2009.png/revision/latest/scale-to-width-down/250?cb=20191020222603",
      view: true,
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      view: false,
    },
  ];
  return (
    <StyledLogos>
      {logos.map((logo) => (
        <ContainerImage key={logo.id} view={logo.view}>
          <img src={logo.src} width="100%" height="100%" alt="" />
        </ContainerImage>
      ))}
    </StyledLogos>
  );
}

const StyledLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerImage = styled.div`
  width: 320px;
  height: 170px;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    display: ${(props) => (props.view ? "flex" : "none")};
  }
`;
