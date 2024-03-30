import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./Pages/Navigation/Navigation";
import Hero from "./Pages/Hero/Hero";
import Projects from "./Pages/Projects/Projects";
import Gallery from "./Pages/Gallery/Gallery";
import Team from "./Pages/Team/Team";
import Footer from "./Pages/Footer/Footer";
import "./styles/_main.scss";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-multi-carousel/lib/styles.css";
import Products from "./Pages/Products/Products";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="App">
      <Navigation />    
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Gallery />
              <Hero />
              <Projects selected={selected} setSelected={setSelected} />
              <Team />
              <Footer />
            </Suspense>
          }
        />
        {/* <Route path="/project/:projectId" element={<ProjectPage />} /> */}
        <Route
          path="/productos"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Products/>
              <Projects selected={selected} setSelected={setSelected} />
              <Team />
              <Footer/>
            </Suspense>
          }
        /> 
      </Routes>
      
    </div>
    
  );
}

export default App;
