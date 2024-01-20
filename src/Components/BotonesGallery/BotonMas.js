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
      <div className="row">
            <img src={clicked ? imgSrcClicked : imgSrc} alt="Botón"/>
      </div>
    </button>
  );
}

export default BotonMas;
