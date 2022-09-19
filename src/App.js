import Nav from "./components/Nav";
import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("about-me");
  return (
    <div className="App">
      <Nav setActivePage={setActivePage} />
      <Body activePage={activePage} setActivePage={setActivePage} />
      <Footer />
    </div>
  );
}

export default App;
