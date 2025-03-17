
{/*}{*/}
import './App.css'
import appImage from '../public/vite.svg'
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'
import ConditionalRender from './Components/Conditional'
import PropChildren from './Components/PropChild'
import PropDestructuring from './Components/PropsDestructuring'
import Fragment from './Components/Fragment'
import Container from './Components/Container'

import StateLiftHandler from './Components/StateLiftHandler';
import MessagePrinter from './Components/StateLiftPrinter';

import { useState } from 'react'

function App() {

  function showMessage() { alert("Show message!")};

  const [message , setMessage] = useState("");
  const handleMessage = (msg) => { setMessage(msg) }

  
  return (
    <>
    {/*}{*/} 
      <h1>React advancing</h1>
      <img src='/vite.svg' ></img>
      <img src={appImage} width={"100px"} height={"100px"}></img>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <PropChildren name="Matheus"/>
      <PropDestructuring brand="VW" km={10000} color="azul"/>
      <PropDestructuring brand="Ford" km={5600} color="verde"/>
      <Fragment />
      <Container functions={showMessage}>
        <p>Attached container content!</p>
      </Container>
 
      <MessagePrinter msg={message}/>
      <StateLiftHandler handleMessage={handleMessage}/>
    </>
  )
}

export default App
