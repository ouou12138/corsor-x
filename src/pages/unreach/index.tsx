import React from "react";
import { useNavigate } from "react-router-dom";

const UnReach = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-12">404</h1>
      <a className="cursor-pointer" onClick={() => navigate(-1)}>
        Back To
      </a>
    </div>
  );
};
export default UnReach;
