import './Meme.css';


export default function Meme() {
  return (
    <main>
      <form action="" className="meme--form">
        <div className="meme--form-inputs-container">
          <input type="text" value="Shut up"/>
          <input type="text" value="and take my money"/>
        </div>
        <button className="meme--form-btn" type="submit">Get a new meme image  🖼</button>
      </form>
    </main>
  );
}