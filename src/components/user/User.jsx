/* eslint-disable react/prop-types */
import "./User.css"

const User = ({ user }) => {
  return (
    <div className="person">
      <h1>Name:{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>UserName : {user.username}</p>
      <p>Phone : {user.phone }</p>
    </div>
  );
};

export default User;
