import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import './Projet.css';

function Projet() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const isCardHovered = (cardId) => {
    return hoveredCard === cardId;
  };

  return (
    <div className="container mt-5 mb-5">
      <h1>Mes recents Projets</h1>
      <div className="row mt-4">
        <div className={`col-md-4 mt-5 ${isCardHovered(1) ? 'zoomed' : ''}`}>
          <div
            className={`card mb-4 custom-card ${isCardHovered(1) ? 'hovered' : ''}`}
            style={{ width: '100%' }}
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="415"
              height="350"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYvyhbLMK9nmjMuvemEoiNA%2FUntitled%3Ftype%3Ddesign%26node-id%3D2%253A2%26t%3DEBcEBF6XctB9fnOy-1"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <h3>Partner Dating</h3>
              <p className="card-text">
              Notre design innovant est conçu pour vous offrir une expérience de rencontre en ligne exceptionnelle
               </p>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mt-5${isCardHovered(2) ? 'zoomed' : ''}`}>
          <div
            className={`card mb-4 custom-card ${isCardHovered(2) ? 'hovered' : ''}`}
            style={{ width: '100%' }}
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="415"
              height="350"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmtL9dXPm89xUM7rmJgupUb%2FUntitled%3Ftype%3Ddesign%26node-id%3D2%253A3%26t%3DeeuHqxtDjWWwTB7V-1"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <h3>Learn To Teach </h3>
              <p className="card-text">
              C'est une représentation visuelle et captivante de l'échange de connaissances et d'expériences.
              </p>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mt-5 ${isCardHovered(3) ? 'zoomed' : ''}`}>
          <div
            className={`card mb-4 custom-card ${isCardHovered(3) ? 'hovered' : ''}`}
            style={{ width: '100%' }}
            onMouseEnter={() => handleCardHover(3)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="415"
              height="350"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNeta7SYy0UMqTJSHB2QieJ%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3D9nQRKLcLmpCVha0k-1"allowFullScreen>

              </iframe>
            <div className="card-body">
              <h3>Djaltabe Shop</h3>
              <p className="card-text">
              Interface de la boutique en ligne DjaltabeShop conçu 
              pour offrir une expérience d'achat fluide et agréable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className={`col-md-4 mt-5${isCardHovered(4) ? 'zoomed' : ''}`}>
          <div
            className={`card mb-4 custom-card ${isCardHovered(4) ? 'hovered' : ''}`}
            style={{ width: '100%' }}
            onMouseEnter={() => handleCardHover(4)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="415"
              height="350"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F32zsdqvMdxOlxjdwWXb6JX%2FUntitled%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DmDFUjfyP64exL4CL-1"allowFullScreen >
             </iframe>
            <div className="card-body">
              <h3>Portfolio</h3>
              <p className="card-text">
              L'interface graphique de mon portfolio est conçue pour mettre en valeur votre travail. 
              </p>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mt-5${isCardHovered(5) ? 'zoomed' : ''}`}>
          <div
            className={`card mb-4 custom-card ${isCardHovered(5) ? 'hovered' : ''}`}
            style={{ width: '100%' }}
            onMouseEnter={() => handleCardHover(5)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="415"
              height="350"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1hRaB2jolgbT1Uhag2w1a5%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D8ANGWeRBQDvStmBQ-1" allowfullscreen>

              </iframe>
            <div className="card-body">
              <h3>Site d'accompagnement</h3>
              <p className="card-text">Le design d'un site d'accompagnement étudiant moderne, convivial et professionnel. </p>
            </div>
          </div>
        </div>

        <div className={`col-md-4 mt-5${isCardHovered(6) ? 'zoomed' : ''}`}>
          <div
            className={`card mb-4 custom-card ${isCardHovered(6) ? 'hovered' : ''}`}
            style={{ width: '100%' }}
            onMouseEnter={() => handleCardHover(6)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="415"
              height="350"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl3qLwrCyaGrm2vE6DkpOxo%2FMaquette-resto%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DmDFUjfyP64exL4CL-1"allowFullScreen>
            </iframe>
            <div className="card-body">
            <h3>Maquette Restaurant</h3>
              <p className="card-text">
              Un espace virtuel qui vous donne un aperçu de l'ambiance et de l'expérience notre restaurant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projet;
