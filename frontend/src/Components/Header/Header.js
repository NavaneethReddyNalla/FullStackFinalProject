import "./Header.css";
import Logo from "../../Assets/introvert_matrimony_logo.png";
import { NavLink, useNavigate } from "react-router-dom";
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
    navigate("/");
  }

  return (
    <header>
      <div>
        <img
          className="me-3 logo"
          src={Logo}
          alt="LOGO"
          style={{ width: "60px" }}
        />
        <span className="text-start title">Introvert Matrimony</span>
      </div>
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
              {/* <button
                className="profile-button"
                onClick={() => navigate(`${currentUser.username}`)}
              >
                <ProfilePic imageSrc={currentUser.photo} dimension="50px" />
              </button> */}
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ProfilePic imageSrc={currentUser.photo} dimension="50px" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item btn"
                      onClick={() =>
                        navigate(`${currentUser.username}/match`, {
                          state: currentUser,
                        })
                      }
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn"
                      onClick={() => navigate(`${currentUser.username}`)}
                    >
                      Matches
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-danger dropdown-item"
                      onClick={logout}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
