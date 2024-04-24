import React from "react";
import { useLocation } from "react-router-dom";

function ProfileView() {
  const match = useLocation().state;

  return (
    <div className="container-fluid">
      <div className="w-50 container profile-view">
        <div id="photos" class="carousel slide w-75 mx-auto">
          <div class="carousel-inner">
            {/* <div class="carousel-item active">
              <img
                src={`/images/photos/${match.username}/${match.profile.photos[0]}`}
                class="d-block w-100"
                alt="..."
              />
            </div> */}
            {match.profile.photos.map((photo) => {
              return (
                <div class="carousel-item active" key={photo}>
                  <img
                    src={`/images/photos/${match.username}/${photo}`}
                    class="d-block w-100"
                    alt={photo}
                  />
                </div>
              );
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#photos"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#photos"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
