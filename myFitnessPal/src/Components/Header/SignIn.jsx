import React from "react";
import "./SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isToken, userData } from "../../store/actions";
import { Navigate } from "react-router";

function SignIn() {
  const { token, data } = useSelector((state) => ({
    token: state.token,
    data: state.data,
  }));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://my-fitness-pal-backend.herokuapp.com/login", formData)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        // console.log(res);
        dispatch(isToken(true));
        console.log(token);
        // console.log(res.data.user);
        dispatch(userData(res.data.user));
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="signIn">
        <h5 className="h5">Member Login</h5>
        <form className="myForm" onSubmit={handleSubmit}>
          <input
            className="email"
            id="email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <br />
          <input
            className="password input"
            id="password"
            placeholder="Create a password"
            onChange={handleChange}
          />
          <br />
          <a className="label">Forgot password?</a>
          <br />
          <input type="submit" value="LOG IN" className="btn input" />
        </form>
        <label className="label">or</label>
        <br />
        <a href="https://my-fitness-pal-backend.herokuapp.com/auth/google">
          <button className="btn2">CONTINUE WITH GOOGLE</button>
        </a>
      </div>
      <p className="p">
        Not a member Yet?<span className="span">Sign up Now!</span>
      </p>
      </div>
      );
    }
    
    export { SignIn };
    // {token ? <Navigate to={`/`} /> : console.log("user not found")}
