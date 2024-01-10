// Gallery.js
import "./Gallery.scss";
import { icons } from "../../Data/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import foto1 from "../../assets/Gallery/foto1.png"
import foto2 from "../../assets/Gallery/foto2.png"
import foto3 from "../../assets/Gallery/foto3.png"
import foto4 from "../../assets/Gallery/foto4.png"
import foto5 from "../../assets/Gallery/foto5.png"
import foto6 from "../../assets/Gallery/foto6.png"

function Gallery() {
    return (
        <div className="col-sm-12 gallery">
          <div className="col-sm-5 caja">

          </div>
          <div className="col-sm-7 caja1">
            <div className="col-sm-12 caja1-1">
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto1})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
              </div>
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto2})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
              </div>
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto3})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
              </div>
            </div>
            <div className="col-sm-12 caja1-1">
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto4})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
              </div>
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto5})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
              </div>
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto6})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
              </div>
            </div>
          </div>
        </div>
      );

}

export default Gallery;
