import React from "react";
import stylesMessages from "./Messagelist.module.css";


function Message(props) {
    console.log(props);
    return <p className={stylesMessages.title}> {props.user.text} </p>;
  }
  
  export default Message