import "./ProfileView.css";
import React from "react";
import { useLocation } from "react-router-dom";

import ProfilePic from "../ProfilePic/ProfilePic";

function ProfileView() {
  const match = useLocation().state;

  return (
    <div className="profile-view-screen">
      <div className="basic-details">
        <ProfilePic imageSrc={match.photo} dimension="150vw" />
        <h2>
          {match.username} ({match.gender === "male" ? "M" : "F"})
        </h2>
      </div>
      <div className="mx-auto profile-view">
        <div id="photos" className="carousel slide mx-auto">
          <div className="carousel-inner">
            {match.profile.photos.map((photo) => {
              return (
                <div
                  className={`carousel-item ${
                    photo !== match.profile.photos[0] ? "active" : ""
                  }`}
                  key={photo}
                >
                  <img
                    src={`/images/photos/${match.username}/${photo}`}
                    className="d-block w-100 carousel-photo"
                    alt={photo}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#photos"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#photos"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="profile-details"></div>
      </div>
    </div>
  );
}

export default ProfileView;
