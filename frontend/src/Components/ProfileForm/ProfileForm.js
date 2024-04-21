import { useForm } from "react-hook-form";
import "./ProfileForm.css";
import React from "react";

function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function updateProfile(data) {
    console.log(data);
  }

  return (
    <div>
      <form className="profile-form" onSubmit={handleSubmit(updateProfile)}>
        <h3>Profile</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Job"
          {...register("job", { required: true })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          {...register("age", { required: true, min: 20 })}
        />
        <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          {...register("dob", { required: true })}
        />
        <select
          {...register("residenceState", { required: true })}
          id="state"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Residence State--
          </option>
          <option value="telangana">Telangana</option>
          <option value="andhra pradesh">Andhra Pradhesh</option>
        </select>

        <select
          {...register("maritalStatus")}
          id="maritalStatus"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Marital Status--
          </option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Hair Color"
          {...register("hairColor", { required: true })}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Eye Color"
          {...register("eyeColor", { required: true })}
        />

        <select
          {...register("skinComplexion")}
          id="skinComplexion"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Skin Complexion--
          </option>
          <option value="fair">Fair</option>
          <option value="dark">Dark</option>
          <option value="brown">Brown</option>
          <option value="vitilgo">Vitilgo</option>
        </select>

        <input
          type="number"
          className="form-control"
          placeholder="Height in cm"
          {...register("height", { required: true })}
        />

        <input
          type="number"
          className="form-control"
          placeholder="Weight in Kg"
          {...register("weight", { required: true })}
        />

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
