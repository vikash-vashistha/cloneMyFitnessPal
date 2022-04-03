import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../Profile/Profile";

export const Navbar = () => {
const { token, data } = useSelector((state) => ({
  token: state.token,
  data: state.data,
}));

    return (
      <div id="navbar">
        <div id="navbar-upper">
          <Link id="logo" to="/">
            <h1>myfitnesspal</h1>{" "}
          </Link>
          <Link to="/profile">
            {token ? <h5>{`${data.email}`}</h5> : <></>}
          </Link>

          <div id="loginSignupLink">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
        <div id="navbar-lower">
          <Link to="/">ABOUT</Link>
          <Link to="/food">FOOD</Link>
          <Link to="/">EXERCISE</Link>
          <Link to="/apps">APPS</Link>
          <Link to="">COMMUNITY</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/premium">PREMIUM</Link>
          <Link to="/goals">GOALS</Link>
        </div>
      </div>
    );
};
