import fetchApi from "../../fetchApi";
import Details from "../Details/Details";
import { useState } from "react";
import List from "../List/List";
import "./App.css";

function App() {
  // const [load, setLoad] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [info, setInfo] = useState("");
  const [description, setDescription] = useState({});

  const loadList = async () => {
    const response = await fetchApi("users");
    const data = await response.json();
    console.log(data);
    setUsersList(data);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInfo(e.target.id);
  };

  const loadInfo = async () => {
    const response = await fetchApi(info);
    const data = await response.json();
    console.log(data);
    setDescription(data);
  };

  return (
    <div className="app">
      <List data={usersList} onClick={handleClick} load={loadList} />
      <Details data={info} load={loadInfo} description={description} />
    </div>
  );
}

export default App;
