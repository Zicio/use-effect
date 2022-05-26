import "./List.scss";

const List = (props) => {
  const { data, onClick, active } = props;

  return (
    <ul className="list">
      {data.map((el) => (
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

export default List;
