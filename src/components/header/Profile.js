import React from "react";

function Profile({ userName }) {
  return (
    <button type="button" className="btn btn-primary">
      {userName}'s Profile
      <span className="badge badge-light">9</span>
    </button>
  );
}

export default Profile;
