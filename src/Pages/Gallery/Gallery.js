import "./Gallery.scss";
import BotonMasC from "../../Components/BotonesGallery/BotonMas.js";
import imagenes from "../../Data/Gallery/imagenes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Data/Icons.js";
function Gallery() {
  const handleBotonClick = (imagen) => {
    // Lógica a ejecutar cuando se hace clic en el botón en una imagen específica
    console.log(`Botón en ${imagen} clicado`);
    // Puedes hacer cualquier otra cosa aquí...
  };
  return (
    <div className="gallery">
      {/* Aqui va el nav vertical de botones  */}
      
      <div className="caja col-sm-5">
        {/* Aqui va el carousel  */}
       
        <div className="navFloat">
          <a className="icon" href="/">
            <FontAwesomeIcon
              icon={["fab", icons.Facebook]}
              size="lg"
              className="brand-menu"
            />
          </a>
          <a className="icon" href="/">
            <FontAwesomeIcon
              icon={["fab", icons.Whatsapp]}
              size="lg"
              className="brand-menu"
            />
          </a>
          <a className="icon" href="/">
            <FontAwesomeIcon
              icon={["fab", icons.Instagram]}
              size="lg"
              className="brand-menu"
            />
          </a>
          <a className="icon" href="/">
            <FontAwesomeIcon
              icon={["fab", icons.Tiktok]}
              size="lg"
              className="brand-menu"
            />
          </a>
        </div>
      
      {/* Aqui cierra  el nav vertical de botones  */}
        <div id="demo" class="carousel " data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                src={imagenes.foto1}
                alt="Los Angeles"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img src={imagenes.foto2} alt="Chicago" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src={imagenes.foto3} alt="New York" class="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
      {/* Aqui va la contenedor de  las 6 fotos   */}
      <div className="col-sm-7 caja1">
        {/* Aqui va la primera fila    */}
        <div className="col-sm-12 caja1-1">
          <div
            className="col-sm 4 caja1-1-1"
            style={{
              backgroundImage: `url(${imagenes.foto1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <BotonMasC
              imgSrc={imagenes.botonMas} // Ruta de la imagen normal
              imgSrcClicked={imagenes.botonMas} // Ruta de la imagen clicada
              onClick={() => handleBotonClick("foto1")} // Pasa la función del clic con el identificador de la imagen
            />
          </div>
          <div
            className="col-sm 4 caja1-1-1"
            style={{
              backgroundImage: `url(${imagenes.foto2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-sm 4 caja1-1-1"
            style={{
              backgroundImage: `url(${imagenes.foto3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <BotonMasC
              imgSrc={imagenes.botonMas} // Ruta de la imagen normal
              imgSrcClicked={imagenes.botonMas} // Ruta de la imagen clicada
              onClick={() => handleBotonClick("foto1")} // Pasa la función del clic con el identificador de la imagen
            />
          </div>
        </div>
        {/* Aqui va la segunda fila   */}
        <div className="col-sm-12 caja1-1">
          <div
            className="col-sm 4 caja1-1-1"
            style={{
              backgroundImage: `url(${imagenes.foto4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-sm 4 caja1-1-1"
            style={{
              backgroundImage: `url(${imagenes.foto5})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <BotonMasC
              imgSrc={imagenes.botonMas} // Ruta de la imagen normal
              imgSrcClicked={imagenes.botonMas} // Ruta de la imagen clicada
              onClick={() => handleBotonClick("foto1")} // Pasa la función del clic con el identificador de la imagen
            />
          </div>

          <div
            className="col-sm 4 caja1-1-1"
            style={{
              backgroundImage: `url(${imagenes.foto6})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
