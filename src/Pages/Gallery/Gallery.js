import "./Gallery.scss";
import foto1 from "../../assets/Gallery/foto1.png";
import foto2 from "../../assets/Gallery/foto2.png";
import foto3 from "../../assets/Gallery/foto3.png";
import foto4 from "../../assets/Gallery/foto4.png";
import foto5 from "../../assets/Gallery/foto5.png";
import foto6 from "../../assets/Gallery/foto6.png";
import carousel from "../../assets/Gallery/carusel.png";
import BotonMas from "../../assets/Gallery/botones/boton_mas.svg";
import PlayButton from "../../Components/PlayButton/PlayButton.js";

function Gallery() {
    return (
        <div className="col-sm-12 gallery">
          {/* Aqui va el carousel  */}
          <div className="col-sm-5 caja">
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={carousel} alt="Los Angeles" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                  <img src={foto1} alt="Chicago" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                  <img src={foto2} alt="New York" class="d-block w-100"/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          {/* Aqui va la tabla de 6 fotos   */}
          <div className="col-sm-7 caja1">
            <div className="col-sm-12 caja1-1">
              <div className="col-sm 4 caja1-1-1" style={{
                backgroundImage: `url(${foto1})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                >
                <PlayButton
                  icon={BotonMas}
                />
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
