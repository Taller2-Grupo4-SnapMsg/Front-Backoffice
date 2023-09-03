import { useState } from "react";
import React from 'react';
import "../../styles/home/container-2.scss";

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


const Feed = () => {
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
      <div className="container-2">

        <div className="home-title-container">
          <div className="text-container">
          <label className="home-title">Home</label>
          </div>
        </div>

        <div className="header">
        </div>

        <div className="box-to-tweet">
          <div className="text-box">
              <textarea
                className="text"
                placeholder="What is happening?"
                value={text}
                onChange={updateText}
                //onkeydown="miFuncionOnKeyDown(event)"
              />
              <button className="post-button" onClick={handleSubmit}>Post</button>
          </div>
        </div>

        <div className="feed">
          {publicacionesHarcodeadas.map((publicacion) => (
            <div className="post" key={publicacion.id}>
              <div className="profile-information">
                <img
                  className="profile-picture"
                  src={publicacion.foto}
                  alt="Foto de perfil"
                />
                <div className="profile-name">{publicacion.nombre}</div>
              </div>
              <div className="post-text">{publicacion.text}</div>
              {publicacion.imagenUrl && (
                <img
                  className="post-picture"
                  src={publicacion.imagenUrl}
                  alt="Imagen de la publicación"
                />
              )}
              <div className="actions">
                {}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Feed;






