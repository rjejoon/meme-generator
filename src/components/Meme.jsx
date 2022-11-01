import { useState } from 'react';

import './Meme.css';
import memesData from '../memesData';



export default function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
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

  return (
    <main>
      <form action="" className="meme--form">
        <div className="meme--form-inputs-container">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button 
          className="meme--form-btn" 
          type="submit"
          onClick={getMemeImage}>
          Get a new meme image  🖼
        </button>
      </form>
      <img className="meme--image" src={meme.randomImage} alt="Meme" />
    </main>
  );
}