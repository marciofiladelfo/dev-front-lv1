import Card from "./components/Card";
import Header from "./components/Menu";
import { useState, useEffect } from "react";
import axios from "axios";
import {Home} from "./style"

const baseUrl = "https://api.github.com";

function App() {
  let [membersAPI, setMembersAPI] = useState([]);
  let [usersAPI, setUsersAPI] = useState([]);

  const getMembers = async () => {
    let res = await axios.get(`${baseUrl}/orgs/aws/members`)
    setMembersAPI(await res.data.map((e) => {
      return e.login;
    }));
  };
  const getUsers = async () => {
    membersAPI.forEach( async (e) => {
      let res = await axios.get(`${baseUrl}/users/${e}`)
        setUsersAPI((state) => [...state, res.data]);
    });
  };

  useEffect(() => {getMembers()}, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {getUsers()}, [membersAPI]); // eslint-disable-line react-hooks/exhaustive-deps

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
