import "./List.scss";
import { useState, useEffect } from "react";
import fetchApi from "../../fetchApi";
import PropTypes from "prop-types";

const List = (props) => {
  const { onClick, active } = props;

  const [loadingList, setLoadingList] = useState(true);
  const [usersList, setUsersList] = useState([]);

  const loadList = async () => {
    const response = await fetchApi("users");
    const data = await response.json();
    setLoadingList(false);
    setUsersList(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  if (loadingList) return <progress className="list-progress" />;

  return (
    <ul className="list">
      {usersList.map((el) => (
        <li
          key={el.id}
          className={
            Number(el.id) === Number(active)
              ? "list__item active"
              : "list__item"
          }
          id={el.id}
          onClick={onClick}
        >
          {el.name}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default List;
