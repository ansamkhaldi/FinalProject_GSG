// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
// import Container from "@material-ui/core/Container";
import Header from "./component/Home/Header/Header";
import CardList from "./component/Home/Card/CardList";
import CardNumber from "./component/Home/Card/CardNumbers";

function App() {
  return (
    <div>
      {/* <Container
        className="App"
        maxWidth
        style={{ backgroundColor: "", height: "100vh" }}
      > */}
      <Navbar />
      <Header />
      <CardList />
      <CardNumber />

      {/* </Container> */}
      <Footer />
    </div>
  );
}

export default App;
