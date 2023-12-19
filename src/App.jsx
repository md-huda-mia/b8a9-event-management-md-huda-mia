import { useState } from "react";
import "./App.css";
import { Banner } from "./Components/Banner";
import Navbar from "./Components/Navbar";
import EventInfo from "./Components/Event/EventInfo";
import EventItems from "./Components/EventItems/EventItems";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="p-12 bg-[#f8f8f8]">
        <EventInfo />
        <EventItems />
      </div>
    </>
  );
}

export default App;
