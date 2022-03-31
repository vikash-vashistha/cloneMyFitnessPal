import React from "react";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isToken, userData } from "../../store/actions";

function SignUp() {
  const { token, data } = useSelector((state) => ({
    token: state.token,
    data: state.data,
  }));

  // console.log(token, data);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
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
      .post("http://localhost:5500/register", formData)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch(isToken(true));
        // console.log(token);
        // console.log(res.data.user);
        dispatch(userData(res.data.user));
        // console.log(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="signUp">
      <h5>Almost there! Create your account</h5>
      <form className="myForm" onSubmit={handleSubmit}>
        <input
          className="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <input
          className="age"
          id="age"
          placeholder="Age"
          onChange={handleChange}
        />
        <br />
        <input
          className="height"
          id="height"
          placeholder="height (ft)"
          onChange={handleChange}
        />
        <br />
        <input
          className="weight"
          id="weight"
          placeholder="Weight (lbs)"
          onChange={handleChange}
        />
        <br />
        <input
          className="email"
          id="email"
          placeholder="Email address"
          onChange={handleChange}
        />
        <br />
        <input
          className="password"
          id="password"
          placeholder="Create a password"
          onChange={handleChange}
        />
        <br />
        <label className="label">
          Must be at least 10 characters, no spaces.
        </label>
        <br />
        <input type={"checkbox"} />
        <label className="label2">Terms & Conditions</label>
        <br />
        <label className="label">
          I agree to MyFitnessPal's <span>Terms</span> & Conditions and{" "}
          <span>Privacy Policy</span>.
        </label>
        <br />
        <input type="submit" value="CONTINUE" className="btn" />
      </form>
      <label className="label">or</label>
      <br />
      <button>CONTINUE WITH GOOGLE</button>
      <br />
      <p>We will never post anything without your permission</p>
      <p>
        This site is protected by reCAPTCHA and the Google{" "}
        <span>Privacy Policy</span> and <span>Terms</span> apply.
      </p>
    </div>
  );
}

export { SignUp };
