import { useState } from 'react';

import './Meme.css';
import memesData from '../memesData';



export default function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  function getMemeImage(e) {
    e.preventDefault();
    const rand_i = Math.floor(Math.random() * allMemeImages.data.memes.length);
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemeImages.data.memes[rand_i].url
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <form action="" className="meme--form">
        <div className="meme--form-inputs-container">
          <input 
            type="text" 
            placeholder="Top Text" 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Bottom Text" 
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button 
          className="meme--form-btn" 
          type="submit"
          onClick={getMemeImage}>
          Get a new meme image  🖼
        </button>
      </form>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="Meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}