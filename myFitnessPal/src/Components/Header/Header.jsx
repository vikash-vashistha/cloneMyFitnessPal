import React from "react";
import { SignUp } from "./SignUp"
import {SignIn} from "./SignIn"
import "./Header.css";
import {Profile} from "../Profile/Profile"

function Header() {
  // const temp = true;
  const temp = false;
  
  return <div>
  {temp ? <SignIn /> : <SignUp />}
  <Profile />
  </div>;
}

export { Header };
