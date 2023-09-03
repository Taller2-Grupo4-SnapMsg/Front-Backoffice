import { useState } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Feed from './Feed';
import Menu from './Menu';
import "../../styles/home/home.scss";
import "../../styles/home/container-1.scss";
import "../../styles/home/container-2.scss";
import "../../styles/home/container-3.scss";

const publicacionesHarcodeadas = [
  {
    id: 1,
    foto: "/home.png",
    nombre: 'Usuario 1',
    text: 'Esta es la primera publicación.',
    imagenUrl: "/home.png",
  },
  {
    id: 2,
    foto: "/home.png",
    nombre: 'Usuario 2',
    text: 'Esta es la segunda publicación.',
    imagenUrl: "/home.png",
  },
  {
    id: 3,
    foto: "/home.png",
    nombre: 'Usuario 3',
    text: 'Esta es la tercera publicación.',
    imagenUrl: "/home.png",
  },
];


const Home = () => {
  const [text, setText] = useState('');
  const updateText = (e) => setText(e.target.value);
  const [publicaciones, setPublicaciones] = useState([]);

  const handleSubmit = () => {
    try {
      const nuevaPublicacion = { id: Date.now(), text: text };
      setPublicaciones([...publicaciones, nuevaPublicacion]);
      setText('');
    } catch (error) {
      console.error('Error al enviar la publicación:', error);
    }
  };

  return (
    <div className="home">
      < Menu/>
      < Feed/>
      <div className="container-3">
      </div>
    </div>
  );
};

export default Home;