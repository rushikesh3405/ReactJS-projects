import React from "react";
import memesData from "../memedata.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);


  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme=> ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>

        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>

        <button className="form--button" onClick={getMemeImage}>
          get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme--imgae"></img>
        <h1 className="meme--text top">{meme.topText}</h1>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
