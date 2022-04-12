import React from "react";
import sleeping from "../../../images/404_NotFound.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center">Machanic is sleeping</h2>
      <img className="w-100" src={sleeping} alt="404 Not Found" />
    </div>
  );
};

export default NotFound;
