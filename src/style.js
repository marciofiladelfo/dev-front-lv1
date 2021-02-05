import styled from "styled-components";

export const Cardi = styled.div`

  display: flex;
  width: 80%;
  border: 1px solid #cad0d2;
  border-radius: 4px;
  margin-top: 1em;
  padding: 20px;
  color: #57727c;

.card_avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_avatar img {
  width: 8em;
}

.card_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 20px;
}

.card_identify {
  display: flex;
  background-color: #cad0d2;
  text-align: center;
  width: 100%;
  padding: 5px;
}

.login{
  width: 100%;
  border-right: 2px solid black;
}

.nome {
  width: 100%;
}

.email{
  width: 100%;
  padding: .5em;
}

.bio{
  width: 100%;
  height: 100%;
  background-color: #cad0d2;
  padding: 5px;
}

@media (max-width: 600px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .card_description {
    margin: 5px;
  }
}
`;

export const Home = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #f0f8ff;
`;

export const Header = styled.div`
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

export const Title = styled.h1`
  font-size: calc(10px + 2vmin);
  color: #282c34; 
`