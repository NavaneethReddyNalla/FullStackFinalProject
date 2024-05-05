import "./Login.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLoginThunk } from "../../Redux/Slices/userLoginSlice";
import { useNavigate } from "react-router-dom";
import LoginPic from "../../Assets/login.jpg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { errorOccured, errorMessage, loginStatus } = useSelector(
    (state) => state.userLogin
  );
  const navigate = useNavigate();

  function handleLogin(data) {
    dispatch(userLoginThunk(data));
  }

  useEffect(() => {
    if (loginStatus) {
      navigate("/");
    }
  }, [loginStatus, navigate]);

  return (
    <div>
      <div className="login" id="login">
        <img src={LoginPic} alt="Login" />
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <h4>Login</h4>
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
            className="form-control"
          />
          {errors.username?.type === "required" && (
            <p className="lead fs-6 text-danger">Username can't be empty</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="form-control"
          />
          {errors.password?.type === "required" && (
            <p className="lead fs-6 text-danger">Password is required</p>
          )}

          {errorOccured && (
            <p className="lead fs-6 text-danger">{errorMessage}</p>
          )}

          <p>
            Don't have an account yet?{" "}
            <a
              href="#login"
              onClick={(event) => {
                event.preventDefault();
                navigate("/register");
              }}
            >
              Sign Up
            </a>
          </p>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
