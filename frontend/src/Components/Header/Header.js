import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../Redux/Slices/userLoginSlice";
import ProfilePic from "../ProfilePic/ProfilePic";

function Header() {
  const { loginStatus, currentUser } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(resetState());
    sessionStorage.removeItem("token");
  }

  return (
    <header>
      <span className="title">Introvert Matrimony</span>
      <nav title="navigation-bar">
        <ul className="nav-buttons">
          <NavLink className="nav-button" to="/">
            Home
          </NavLink>
          {!loginStatus ? (
            <>
              <NavLink className="nav-button" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-button" to="/register">
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="profile-button"
                onClick={() => navigate(`${currentUser.username}`)}
              >
                <ProfilePic imageSrc={currentUser.photo} dimension="50px" />
              </button>
              <button className="btn btn-danger" onClick={logout}>
                Sign Out
              </button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
