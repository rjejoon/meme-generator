import './Meme.css';
import memesData from '../memesData';


export default function Meme() {
  function getRandImg(e) {
    e.preventDefault();
    const rand_i = Math.floor(Math.random() * memesData.data.memes.length);
    console.log(memesData.data.memes[rand_i].url);
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
          onClick={getRandImg}>
          Get a new meme image  🖼
        </button>
      </form>
    </main>
  );
}