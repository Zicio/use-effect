import "./Details.scss";
import { useState, useEffect } from "react";
import fetchApi from "../../fetchApi";
import PropTypes from "prop-types";

const Details = (props) => {
  const { info } = props;

  const [loadingDescription, setLoadingDescription] = useState(false);
  const [description, setDescription] = useState(null);

  const loadInfo = async () => {
    const response = await fetchApi(info);
    const data = await response.json();
    setLoadingDescription(false);
    setDescription(data);
  };

  useEffect(() => {
    if (info) {
      setLoadingDescription(true);
      loadInfo();
    }
  }, [info]);

  if (loadingDescription) {
    return (
      <div className="info-load">
        <progress className="info-progress" />
      </div>
    );
  }

  if (description) {
    return (
      <div className="info">
        <img className="info__avatar" src={description.avatar} alt="Avatar" />
        <h3 className="info__name">{description.name}</h3>
        <p className="info__city">City: {description.details.city}</p>
        <p className="info__company">Company: {description.details.company}</p>
        <p className="info__position">
          Position: {description.details.position}
        </p>
      </div>
    );
  }
};

Details.propTypes = {
  info: PropTypes.string.isRequired,
};

export default Details;
