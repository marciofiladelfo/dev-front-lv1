import styled from "styled-components";

function Menu() {
  return (
    <Header>
      <Title>Projeto STIT</Title>
    </Header>
  );
}

export default Menu;

const Header = styled.div`
  display: flex;
  width: 80%;
  padding: 1em;
  background-color: #cad0d2;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: calc(10px + 2vmin);
  color: #282c34; 
`
