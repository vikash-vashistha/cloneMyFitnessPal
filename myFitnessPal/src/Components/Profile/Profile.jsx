import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { isToken, userData } from "../../store/actions";

function Profile() {
  const { token, data } = useSelector((state) => ({
    token: state.token,
    data: state.data,
  }));

  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="component">
      <h2 className="color heading">{`${data.email} profile`}</h2>
      <div className="profile">
        <img src="https://via.placeholder.com/150" />
        <div>
          <h3 className="color">{data.email}</h3>
          <p className="color">{`${data.age} years old`}</p>
          <p className="color">{data.gender}</p>
          <button className="btnn">Edit Profile</button>
          <button className="btnn">Edit Photos</button>
        </div>
      </div>
    </div>
  );
}

export { Profile };
