import React, { useState } from "react";
import { Quote } from "../components/Quote";
import { Signcard } from "../components/Signcard";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { signUpParam } from "@rathore.yuvraj19/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";

const Signup = () => {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState<signUpParam>({
    name: "",
    email: "",
    password: "",
  });

  async function onSubmit() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        userDetail
      );
      const token = res.data.token;
      await localStorage.setItem("token", `Bearer ${token}`);
      console.log(res.data.token);
      navigate("/blogs");
    } catch (error) {}
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setUserDetail((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }

  return (
    <>
      <AppBar></AppBar>
      <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2 min-w-[min-content]">
        <div className="w-full h-screen flex flex-col justify-center items-center min-w-fit">
          <div className="flex flex-col h-fit w-3/5">
            <Signcard
              title={"Create Account"}
              subtitle={"Already have an Account?"}
              link={"Sign In"}
              jumpto={"signin"}
            />
            <Input
              id={"name"}
              title={"Name"}
              subtitle={"Enter Your Name"}
              onChange={onChange}
            />
            <Input
              id={"email"}
              title={"Email"}
              subtitle={"xyz@example.com"}
              onChange={onChange}
            />
            <Input
              id={"password"}
              title={"Password"}
              subtitle={"**********"}
              type={"password"}
              onChange={onChange}
            />
            <Button title={"Sign Up"} onSubmit={onSubmit} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Signup;
