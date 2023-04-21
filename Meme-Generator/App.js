import React from 'react'
import './style.css'
import Header from "./components/Header.js"
import Meme from "./components/Meme.js"
import memesdata from './memedata'
import Star from "./components/Star.js"
import Box from "./components/Box.js"
import boxes from './components/boxes.js'
import Form from "./components/Form.js"


export default function App(){
  return(
    <div>
    <Header/>
    <Meme/>
    </div>
  )
}