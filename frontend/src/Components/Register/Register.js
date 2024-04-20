import "./Register.css";
import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onFormSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="lead fs-5 text-danger">Full Name is required</p>
        )}

        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true, minLength: 5 })}
          className="form-control"
        />
        {errors.username?.type === "required" && (
          <p className="lead fs-5 text-danger">Username is required</p>
        )}

        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="form-control"
        />
        {errors.email?.type === "required" && (
          <p className="lead fs-5 text-danger">Email is required</p>
        )}

        <input
          type="number"
          placeholder="Mobile No."
          {...register("mobile", { required: true })}
          className="form-control"
        />
        {errors.mobile?.type === "required" && (
          <p className="lead fs-5 text-danger">Mobile Number is required</p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          id="password"
          className="form-control"
        />
        {errors.password?.type === "required" && (
          <p className="lead fs-5 text-danger">Password is required</p>
        )}

        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
