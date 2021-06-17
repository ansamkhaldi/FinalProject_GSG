import React from "react";
import Header from "../component/Home/Header/Header";
import CardList from "../component/Home/Card/CardList";
import CardNumber from "../component/Home/Card/CardNumbers";
import Wheelchair from "../component/Home/Wheelchair/Wheelchair";
import VhComponent from "../component/Home/VedioHome/VhComponent";

function Home(props) {
  return (
    <div>
      <Header />
      <CardList />
      <CardNumber />
      <Wheelchair />
      <VhComponent />
    </div>
  );
}

export default Home;
