import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        // setUser(userData);
        const response = await axios.get(`https://dummyjson.com/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUser();
  }, []);

  if (!user) {
    return <div>Please log in</div>;
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
}

export default Profile;
