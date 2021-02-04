import styled from 'styled-components';
import Card from './components/Card'
import Header from './components/Menu'
import { useState, useEffect } from "react";
import axios from "axios";

const securing = {
  baseUrl: "https://api.github.com",
  client_id: "Iv1.7e879e2f04f15fc8",
  client_secret: "SHA256:izvwPuwh5WW6gWvJcykfcwNpfxNEQOP7Xk4qLyGZiiQ"
}

function App() {

  const [membersAPI, setMembersAPI] = useState([]);
  let [usersAPI, setUsersAPI] = useState([]);

  const getMembers = () => {
    axios.get(`${securing.baseUrl}/orgs/aws/members?client_id=${securing.client_id}&client_secret=${securing.client_secret}`).then((res) => {
        setMembersAPI(res.data);
        
      });
    };
    
    useEffect(getMembers, []); // eslint-disable-line react-hooks/exhaustive-deps
    let userName = membersAPI.map(e => {return e.login});

    if(membersAPI) {
      userName.forEach(e => {
        axios.get(`${securing.baseUrl}/users/${e}?client_id=${securing.client_id}&client_secret=${securing.client_secret}`).then((res) => {
          
         return setUsersAPI(res.data);
        });
      });
    
      console.log(usersAPI)
  return (
    <Home>
      <Header/>
        {usersAPI.map((user, index) => {
          return(   
            <Card 
              key={index} 
              login = {user.login}
              name = {user.name == null ?  "Nome não cadastrado" : user.name}
              avatar_url = {user.avatar_url}
              email = {user.email == null ?  "Email não cadastrado" : user.email}
              bio = {user.bio == null ?  "Bio não cadastrada" : user.bio}
            />  
        )}
        )}
    </Home>
  );
    }else{
      return <h1>Carregando...</h1>
    }
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
`
