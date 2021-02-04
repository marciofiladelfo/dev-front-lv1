import React from "react";
import styled from "styled-components";

const Card = (props) => (
  <Cardi>
    <div className="card_avatar">
      <img alt={props.avatar_url} src={props.avatar_url} />
    </div>
    <div className="card_description"> 
      <div className="card_identify">          
        <div className="login">{props.login} </div>          
        <div className="nome">{props.name}</div>
      </div>
      <div className="email">{props.email}</div>
      <div className="bio">{props.bio}</div>
    </div>   
  </Cardi>
);

export default Card;

const Cardi = styled.div`

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
  margin-bottom: 8px ;
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
