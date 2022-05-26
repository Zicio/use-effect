import { useEffect, useState } from "react";
import fetchApi from "../../fetchApi";

const Details = (props) => {
  const { info, load, description } = props;

  useEffect(() => {
    if (info) {
      load();
    }
  }, [info]);

  return <div>{JSON.stringify(description)}</div>;
};

export default Details;
