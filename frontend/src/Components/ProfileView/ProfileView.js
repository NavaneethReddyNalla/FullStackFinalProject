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
        <form>
          <div className="input-group">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              className="form-control"
              value={match.name}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Age</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.age}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Job</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.job}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Salary Range</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.salaryRange}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Education</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.highestLevelOfEducation}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Food Choice</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.foodChoice}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Date of Birth</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.dob
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Horoscope</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.horoscope}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Marital Status</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.maritalStatus}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Mother Tongue</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.motherTongue}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Skin Complexion</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.skinComplexion}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Residence</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.residenceState}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Height</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.height}
              readOnly
            />
            <span className="input-group-text">cm</span>
          </div>

          <div className="input-group">
            <span className="input-group-text">Weight</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.weight}
              readOnly
            />
            <span className="input-group-text">Kg</span>
          </div>

          <div className="input-group">
            <span className="input-group-text">Physical Status</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.physicalStatus}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Body Build</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.bodyBuild}
              readOnly
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Hobbies</span>
            <input
              type="text"
              className="form-control"
              value={match.profile.hobbies.join(", ")}
              readOnly
            />
          </div>
        </form>
      </div>
      <div className="profile-view">
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
        <div className="text-start ms-5 profile-details">
          <h2>About Me</h2>
          <p>{match.profile.aboutMe}</p>
          <h2>About My Family</h2>
          <p>{match.profile.aboutFamily}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
