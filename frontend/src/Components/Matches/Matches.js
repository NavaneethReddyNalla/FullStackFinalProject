import "./Matches.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import getAxiosWithToken from "../util";
import ProfilePic from "../ProfilePic/ProfilePic";
import { useNavigate } from "react-router-dom";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [err, setErr] = useState("");
  const { currentUser } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const axiosWithToken = getAxiosWithToken();
      const gender = currentUser.gender === "male" ? "female" : "male";

      const res = await axiosWithToken.get(`/user/all/${gender}`);

      if (res.data.status === 12) {
        setMatches(res.data.payload);
        console.log(res.data.payload);
        setErr("");
      } else {
        setErr(res.data.message);
      }
    };
    getUsers();
  }, [currentUser.gender]);

  return (
    <div className="mt-5">
      {err !== "" && <p className="lead fs-6 text-danger">{err}</p>}
      {matches.length > 0 ? (
        <div className="container-fluid">
          <div className="row row-cols-4">
            {matches.map((match) => {
              return (
                <div className="col" key={match._id}>
                  <div className="card w-100 user-card">
                    <div className="card-body">
                      <ProfilePic imageSrc={match.photo} dimension={"100px"} />
                      <h4 className="card-title">{match.name}</h4>
                      <h6 className="card-sub-title">
                        Job: {match.profile.job}
                      </h6>
                      <p className="card-text">
                        Education: {match.profile.highestLevelOfEducation}
                      </p>
                      <p className="card-text">Age: {match.profile.age}</p>
                      <p className="card-text">
                        State: {match.profile.residenceState}
                      </p>
                      <p className="card-text">
                        Salary Range: {match.profile.salaryRange}
                      </p>
                      <p className="card-text">
                        Date of Birth: {match.profile.dob}
                      </p>
                      <p className="card-text">
                        Horoscope: {match.profile.horoscope}
                      </p>

                      <button
                        className="btn btn-outline-success"
                        onClick={() => navigate("match", { state: match })}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="lead fs-6 text-danger">No Users Found</p>
      )}
    </div>
  );
}

export default Matches;
