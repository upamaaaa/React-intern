import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Profile.scss";


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
    <div className="profile container">


      <div className="profile__card">

        <img
          src={user.image}
          alt={user.username}
          className="profile__image"
        />

        <h2>
          {user.firstName} {user.lastName}
        </h2>

        <p className="profile__username">
          @{user.username}
        </p>

        <div className="column mt-2">

        <div className="col-md-12">
          <div className="profile__info-card">
            <span>ID</span>
            <h5>{user.id}</h5>
          </div>
        </div>

        <div className="col-md-12">
          <div className="profile__info-card">
            <span>Gender</span>
            <h5>{user.gender}</h5>
          </div>
        </div>

        <div className="col-md-12">
          <div className="profile__info-card">
            <span>Username</span>
            <h5>{user.username}</h5>
          </div>
        </div>

        <div className="col-md-12">
          <div className="profile__info-card">
            <span>Email</span>
            <h5>{user.email}</h5>
          </div>
        </div>

      </div>

      </div>

      
       </div>
  );
}

export default Profile;
