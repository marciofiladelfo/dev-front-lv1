import styled from "styled-components";
import Card from "./components/Card";
import Header from "./components/Menu";
import { useState, useEffect } from "react";
import axios from "axios";

// cadastro de app no GitHub para não exceder número de requisições
const securing = {
  baseUrl: "https://api.github.com",
  client_id: "Iv1.7e879e2f04f15fc8",
  client_secret: "SHA256:izvwPuwh5WW6gWvJcykfcwNpfxNEQOP7Xk4qLyGZiiQ",
};

function App() {
  const [membersAPI, setMembersAPI] = useState([]);
  let [usersAPI, setUsersAPI] = useState([]);

  const getMembers = () => {
    axios
      .get(
        `${securing.baseUrl}/orgs/aws/members?client_id=${securing.client_id}&client_secret=${securing.client_secret}`
      )
      .then((res) => {
        setMembersAPI(res.data);
      });
    let userName = membersAPI.map((e) => {
      return e.login;
    });
    userName.forEach((e) => {
      axios
        .get(
          `${securing.baseUrl}/users/${e}?client_id=${securing.client_id}&client_secret=${securing.client_secret}`
        )
        .then((response) => {
          console.log(response.data);
          setUsersAPI((state) => [...state, response.data]);
        });
    });
  };

  useEffect(getMembers, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Home>
      <Header />
      {usersAPI.map((user, index) => {
        return (
          <Card
            key={index}
            login={user.login}
            name={user.name == null ? "Nome não cadastrado" : user.name}
            avatar_url={user.avatar_url}
            email={user.email == null ? "Email não cadastrado" : user.email}
            bio={user.bio == null ? "Bio não cadastrada" : user.bio}
          />
        );
      })}
    </Home>
  );
}

export default App;

const Home = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #f0f8ff;
`;
