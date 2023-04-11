import React from "react";
import { useSelector } from "react-redux";
import { useFetchClientsQuery } from "../../store/reduxStore";
const InformationBox = ({ information }) => {
  const currState = useSelector((state) => state.auth);
  console.log(currState);
  const { data, error, isLoading, isFetching } = useFetchClientsQuery();
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default InformationBox;
