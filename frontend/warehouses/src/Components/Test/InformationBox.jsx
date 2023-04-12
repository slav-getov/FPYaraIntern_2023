import React from "react";
import { useSelector } from "react-redux";
import { useFetchClientsQuery } from "../../store/reduxStore";
const InformationBox = ({ information }) => {
  const { user, token } = useSelector((state) => state.auth);

  //const { data, error, isLoading, isFetching } = useFetchClientsQuery();
  return (
    <div>
      <p>hello {token}</p>
    </div>
  );
};

export default InformationBox;
