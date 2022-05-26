import "./Details.scss";

const Details = (props) => {
  const { data, load } = props;

  if (load) {
    return (
      <div className="app">
        <progress />
      </div>
    );
  }

  if (data) {
    return (
      <div className="info">
        <img className="info__avatar" src={data.avatar} alt="Avatar" />
        <h3 className="info__name">{data.name}</h3>
        <p className="info__city">City: {data.details.city}</p>
        <p className="info__company">Company: {data.details.company}</p>
        <p className="info__position">Position: {data.details.position}</p>
      </div>
    );
  }
};

export default Details;
