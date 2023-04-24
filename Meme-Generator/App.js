import React from 'react'
import './style.css'
import Header from "./components/Header.js"
import Meme from "./components/Meme.js"


export default function App(){
    const[meme,setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImg : "http://api.imgflip.com/lbij.jpg"
  })
  const [allMemes,setAllMemes] = React.useState([]);  

  React.useEffect(function(){
    fetch(`http://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  },[])

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random()*allMemes.length());
    const url = allMemes[randomNumber].url
    setMeme(prevmeme =>({
      ...prevmeme,
      randomImg : url
    }))
  }
  return(
    <div>
    <Header/>
    <Meme/>
    </div>
  )
}
