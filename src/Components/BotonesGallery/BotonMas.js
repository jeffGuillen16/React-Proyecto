import React, { useState } from 'react';
import './BotonMas.scss'; 

function BotonMas({ imgSrc, imgSrcClicked, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <button className="custombutton p-0" onClick={handleClick}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 d-flex justify-content-center align-items-center">
            <img src={clicked ? imgSrcClicked : imgSrc} alt="Botón" />
          </div>
          <div className="col-2 text-center bg-light justify-content-center align-items-center">
            {/* Puedes agregar contenido adicional aquí si es necesario */}
          </div>
        </div>
      </div>
    </button>
  );
}

export default BotonMas;
