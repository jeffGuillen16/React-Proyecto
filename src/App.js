import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./Pages/Navigation/Navigation";
import Hero from "./Pages/Hero/Hero";
import Projects from "./Pages/Projects/Projects";
import Gallery from "./Pages/Gallery/Gallery";
import Team from "./Pages/Team/Team";
import Footer from "./Pages/Footer/Footer";
import MoreInfoModal from "./Components/MoreInfoModal/MoreInfoModal";

import "./styles/_main.scss";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-multi-carousel/lib/styles.css";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

// Don't touch this file

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Hero />
              <Projects selected={selected} setSelected={setSelected} />
              <Gallery />
              <Team />
            </Suspense>
          }
        />
        <Route
          exact
          path="/projects"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
      <div className="d-flex align-items-center justify-content-center bottom_co">
        <button
          onClick={() =>
            window.open(
              ""
            )
          }
          className="btn px-1 my_links"
        >
         Tienda Virtual
        </button>
      </div>
      {/* MoreInfoModal */}
      <MoreInfoModal selected={selected} />
    </div>
  );
}

export default App;
