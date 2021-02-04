import styled from 'styled-components';
import Card from './components/Card'
import Header from './components/Menu'
import { useState, useEffect } from "react";


function App() {
  let [user, setUser] = useState([]);
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/aws/members`)
      .then((res) => {        
        setUser(res.data);
        console.log(res)
        
        if(user){
          user.forEach(element => {
            element = element.login
            fetch(`https://api.github.com/users/${element}`)
            .then(res => {
              setUserName(res.data)
              console.log(res.data)
            })
          })
        }
      })
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  

  return (
    <Home>
      <Header/>
        {userName.map((user, index) => {
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
    // }else{
    //   return <h1>Carregando...</h1>
    // }
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
