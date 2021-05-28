import React from "react";
import Heropage from "./components/heropage";
import Nav from "./components/navbar";
import Homepage2 from "./components/homepage2";

function Home() {
  return (
    <div>
      <Nav />
      <Heropage />
      <Homepage2 />
    </div>
  );
}

export default Home;
