import Details from "../Details/Details";
import { useState } from "react";
import List from "../List/List";
import "./App.css";

function App() {
  const [info, setInfo] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setInfo(e.target.id);
  };

  return (
    <div className="app">
      <List onClick={handleClick} active={info} />
      <Details info={info} />
    </div>
  );
}

export default App;
