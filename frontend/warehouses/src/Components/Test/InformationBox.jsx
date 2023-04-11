import React from "react";
import { useFetchClientsQuery } from "../../store/reduxStore";
const InformationBox = ({ information }) => {
  const { data, error, isLoading } = useFetchClientsQuery();
  return <div>{console.log(data, error, isLoading)}</div>;
};

export default InformationBox;
