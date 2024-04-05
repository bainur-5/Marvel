import React from "react";
import Header from "./layout/Header/Header";
import AppRoute from "./Router/AppRoute";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <AppRoute />
      <Footer />
    </>
  );
}

export default App;
