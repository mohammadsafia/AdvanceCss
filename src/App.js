import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";
import About from "./components/about/about.component";
import "./App.scss";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <About />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
