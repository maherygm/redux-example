import React from "react";
import "./__user.css";
const User = ({ user }) => {
  return (
    <div className="user-section">
      <div className="icons">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="6" r="4" fill="#1C274C" />
          <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" fill="#1C274C" />
        </svg>
      </div>
      <h1>{user.pseudo}</h1>
      <p>Ages : {user.age} ans</p>
      <p>Liked : {user.likes}</p>
    </div>
  );
};

export default User;
