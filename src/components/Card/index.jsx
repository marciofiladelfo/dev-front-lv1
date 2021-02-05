import React from "react";
import {Cardi} from "../../style";

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


