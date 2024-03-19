import React from "react";
import Avatar from "./Avatar";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between p-4">
      <div className="font-extrabold text-lg">Medium</div>
      <div>{<Avatar name={"Yuvraj Singh Rathore"} />}</div>
    </div>
  );
};

export default AppBar;
