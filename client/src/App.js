import React from "react";
import "./App.css";

// import Books from "./pages/Books";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Page_Wrapper from "./components/Page-Wrapper";


function App() {
  return (
    <>
      <Page_Wrapper>
        <Header />
        <Home />
      </Page_Wrapper>
      <Footer />
    </>
  );
}

export default App;
