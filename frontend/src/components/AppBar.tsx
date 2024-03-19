import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between p-4">
      <Link to={"/blogs"}>
        <div className="font-extrabold text-lg">Medium</div>
      </Link>
      <div className="flex flex-row items-center">
        <Link
          to={"/publish"}
          className="text-white font-bold mr-5 bg-green-700 rounded-md p-2"
        >
          New Post
        </Link>
        <div>{<Avatar name={"Yuvraj Singh Rathore"} />}</div>
      </div>
    </div>
  );
};

export default AppBar;
