import './Header.css';
import trollFaceImg from '../troll-face.png';


export default function Header() {
  return (
    <div className="header">
      <img className="header--image" src={trollFaceImg} alt="Troll Face" />
      <span className="header--title">Meme Generator</span>
      <span className="header--sub-title">React Course - Project 3</span>
    </div>
  );
}