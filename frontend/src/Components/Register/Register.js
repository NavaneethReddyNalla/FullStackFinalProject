import "./Register.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import profileImage from "../../Assets/profile.jpeg";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(profileImage);
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function onFormSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const { result } = event.target;
        setImage(result);
      };

      fileReader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>
        <img src={image} alt="Profile Preview" className="preview" />
        <br />
        <label htmlFor="photo">Upload Profile Pic</label>
        <input
          type="file"
          accept="image/*"
          id="preview-button"
          {...register("photo", { required: true })}
          onChange={handleChange}
        />
        {errors.photo?.type === "required" && (
          <p className="lead fs-6 text-danger">Please upload a picture</p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="lead fs-6 text-danger">Full Name is required</p>
        )}

        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true, minLength: 5 })}
          className="form-control"
        />
        {errors.username?.type === "required" && (
          <p className="lead fs-6 text-danger">Username is required</p>
        )}

        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="form-control"
        />
        {errors.email?.type === "required" && (
          <p className="lead fs-6 text-danger">Email is required</p>
        )}

        <input
          type="number"
          placeholder="Mobile No."
          {...register("mobile", { required: true })}
          className="form-control"
        />
        {errors.mobile?.type === "required" && (
          <p className="lead fs-6 text-danger">Mobile Number is required</p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          id="password"
          className="form-control"
        />
        {errors.password?.type === "required" && (
          <p className="lead fs-6 text-danger">Password is required</p>
        )}

        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
