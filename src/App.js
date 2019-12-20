import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
