import fetchApi from "../../fetchApi";
import Details from "../Details/Details";
import { useState, useEffect } from "react";
import List from "../List/List";
import "./App.css";

function App() {
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDescription, setLoadingDescription] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [info, setInfo] = useState("");
  const [description, setDescription] = useState(null);

  const loadList = async () => {
    const response = await fetchApi("users");
    const data = await response.json();
    setLoadingList(false);
    setUsersList(data);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInfo(e.target.id);
  };

  const loadInfo = async () => {
    const response = await fetchApi(info);
    const data = await response.json();
    setLoadingDescription(false);
    setDescription(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    if (info) {
      setLoadingDescription(true);
      loadInfo();
    }
  }, [info]);

  if (loadingList)
    return (
      <div className="app">
        <progress />
      </div>
    );

  return (
    <div className="app">
      <List data={usersList} onClick={handleClick} active={info} />
      <Details data={description} load={loadingDescription} />
    </div>
  );
}

export default App;
