// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Container
        className="App"
        maxWidth
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      >
        <Navbar />
      </Container>
      <Footer />
    </>
  );
}

export default App;
