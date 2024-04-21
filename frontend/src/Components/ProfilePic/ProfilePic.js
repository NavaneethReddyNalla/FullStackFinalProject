import "./ProfilePic.css";
import React from "react";

function ProfilePic({ imageSrc, dimension }) {
  return (
    <img
      className="profile-pic"
      src={imageSrc}
      alt="Profile Pic"
      width={dimension}
      height={dimension}
    />
  );
}

export default ProfilePic;
