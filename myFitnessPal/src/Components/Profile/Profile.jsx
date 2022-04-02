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
      <h1>{`${data.email} profile`}</h1>
      <div className="profile">
        <img src="https://picsum.photos/200" />
        <div>
          <h3>{data.email}</h3>
          <p>{`${data.age} years old`}</p>
          <p>{data.gender}</p>
          <button className="btnn">Edit Profile</button>
          <button className="btnn">Edit Photos</button>
        </div>
      </div>
    </div>
  );
}

export { Profile };
