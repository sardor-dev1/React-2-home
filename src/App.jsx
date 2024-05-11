import { Fragment, useState } from "react";
import "./app.scss";
import Header from "./components/layout/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
