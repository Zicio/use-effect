import { useEffect } from "react";

const List = (props) => {
  const { data, load, onClick } = props;

  useEffect(() => {
    load();
  }, []);

  return (
    <ul className="list">
      {data.map((el) => (
        <li key={el.id} className="list__item" id={el.id} onClick={onClick}>
          {el.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
