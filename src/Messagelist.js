import * as React from 'react';
import {Input, InputAdornment} from "@mui/material"
import {  makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useRef, useCallback } from "react"
import styles from "./Messagelist.module.css"


const useStyle = makeStyles(() => {
  return {
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
      marginTop: "800px"
    },

  }
})

const Messagelist = () => {
  const s = useStyle()
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState("")

  const ref = useRef()
  

  const handleSendMessage = () => {
    if (value){
      setMessages((state) => [...state, {value, author: "User"}])
      
    }
  }

  const handlePressInput = ({code}) => {
    if(code === "Enter") {
      setMessages((state) => [...state, {value, author: "User"}])
      
    }
  }

  
  
  const handleScrollBottom = useCallback(() => {
    if (ref.current){
      ref.current.scrollTo(0, ref.current.scrollHeight)
    }
  }, [])
  
  useEffect(() =>{
    const lastMessage = messages[messages.length - 1]
  
  handleScrollBottom()

  if (lastMessage?.author === "User"){
    setTimeout(() => {
      setMessages((state) =>[
        ...state,
        {value: "Hello from bot", author: "Bot"},
      ])
    }, 500)
  }
}, [messages, handleScrollBottom])


   
  return (
    <>
     <div ref={ref}>
    
    <ul style={{
      heigth: "300px",
      position: "absolute"
    }}>
      {messages.map((message, id) => (
        <li key = {id}>
          {message.value} = {message.author}
        </li>
      ))}
    </ul>

  
  </div>


      <Input
        className={s.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        fullWidth={true}
        placeholder="Введите сообщение..."
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <SendIcon onClick={handleSendMessage} className={styles.icon} />
            )}
          </InputAdornment>
        }
        />
        </>
  )
}

export default Messagelist