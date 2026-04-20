import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default Profile;
