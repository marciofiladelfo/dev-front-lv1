import Card from "./components/Card";
import Header from "./components/Menu";
import { useState, useEffect } from "react";
import axios from "axios";
import {Home} from "./style"

const baseUrl = "https://api.github.com";

function App() {
  let [membersAPI, setMembersAPI] = useState([]);
  let [usersAPI, setUsersAPI] = useState([]);

  const getMembers = () => {
    axios.get(`${baseUrl}/orgs/aws/members`).then((res) => {
      setMembersAPI(res.data);
    });
    console.log(membersAPI);
    let userName = membersAPI.map((e) => {
      return e.login;
    });
    console.log(userName)
    userName.forEach((e) => {
      axios.get(`${baseUrl}/users/${e}`).then((response) => {
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
