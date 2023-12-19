import { useState } from "react";
import "./App.css";
import { Banner } from "./Components/Banner";
import Navbar from "./Components/Navbar";
import EventInfo from "./Components/Event/EventInfo";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <EventInfo />
    </>
  );
}

export default App;
