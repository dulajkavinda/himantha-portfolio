import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header.js/Header";
import HeaderMobile from "./components/Header.js/HeaderMobile";
import About from "./components/About/About";
import Edu from "./components/Education/Edu";
import Work from "./components/Work/Work";
import Personal from "./components/Personal/Personal";
import Skills from "./components/Skills/Skill";
import "bootstrap/dist/css/bootstrap.min.css";

import useWindowSize from "./hooks/useWindowSize";

import ReactGA from "react-ga";

function App() {
  const size = useWindowSize();
  useEffect(() => {
    ReactGA.initialize("UA-148753354-1");
    ReactGA.pageview("/");
  }, []);
  return (
    <div className="container" style={{ height: "100%", overflow: "hidden" }}>
      {size.width < 1000 ? <HeaderMobile /> : <Header />}
      <div>
        <div class="row align-items-center">
          <div class="col-sm">
            <About />
            <Edu />
            <Work />
          </div>
          <div class="col-sm">
            <Personal />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
