import React from "react";
import css from "./styles/App.module.scss";
import {
  Header,
  Hero,
  People,
  Portfolio,
  Work,
  Experties,
  Footer,
} from "./components/index";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
