// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* <Container
        className="App"
        maxWidth
        style={{ backgroundColor: "", height: "100vh" }}
      > */}
      <Router>
        <Navbar />

        <Switch>
          <div>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </Switch>
      </Router>
      {/* </Container> */}
      <Footer />
    </div>
  );
}

export default App;
