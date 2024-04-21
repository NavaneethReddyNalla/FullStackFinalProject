import { useForm } from "react-hook-form";
import "./ProfileForm.css";
import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";

function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [files, setFiles] = useState();

  const horoscopes = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Saggitarius",
  ];

  const fields = [
    "job",
    "age",
    "dob",
    "residenceState",
    "maritalStatus",
    "hairColor",
    "eyeColour",
    "skinComplexion",
    "height",
    "weight",
    "horoscope",
    "bodyBuild",
    "foodChoice",
    "motherTongue",
    "highestLevelOfEducation",
    "physicalStatus",
    "aboutMe",
    "aboutFamily",
    "hobbies",
    "salaryRange",
    "photos",
  ];

  function imageChange(event) {
    setFiles(event.target.files);
  }

  async function updateProfile(data) {
    data.hobbies = data.hobbies.split(",").map((hobby) => hobby.trim());
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
          {...register("job", { required: "Job is required" })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          {...register("age", {
            required: "Age is required",
            min: { value: 20, message: "Age should be atleast 20" },
          })}
        />
        <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          {...register("dob", { required: "Date of Birth is required" })}
        />
        <select
          {...register("residenceState", {
            required: "State of Residence is required",
          })}
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
          {...register("maritalStatus", {
            required: "Marital Status is required",
          })}
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
          {...register("hairColor", { required: "Hair Color is required" })}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Eye Color"
          {...register("eyeColor", { required: "Eye Color is required" })}
        />

        <select
          {...register("skinComplexion", {
            required: "Skin Complexion is required",
          })}
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
          {...register("height", { required: "Height is required" })}
        />

        <input
          type="number"
          className="form-control"
          placeholder="Weight in Kg"
          {...register("weight", { required: "Weight is required" })}
        />

        <select
          {...register("horoscope", { required: "Horoscopre is required" })}
          id="horoscope"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Horoscope--
          </option>
          {horoscopes.map((horoscope) => (
            <option key={horoscope} value={horoscope.toLowerCase()}>
              {horoscope}
            </option>
          ))}
        </select>

        <select
          {...register("bodyBuild", { required: "Body Build is required" })}
          id="bodyBuild"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Body Build--
          </option>
          <option value="lean">Lean</option>
          <option value="average">Average</option>
          <option value="heavy">heavy</option>
          <option value="muscular">Muscular</option>
        </select>

        <select
          {...register("physicalStatus", {
            required: "Physical Status is required",
          })}
          id="physicalStatus"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Physical Status--
          </option>
          <option value="fit">Fit</option>
          <option value="handicapped">Handicapped</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Mother Tongue"
          {...register("motherTongue", {
            required: "Mother Tongue is required",
          })}
        />

        <select
          {...register("highestLevelOfEducation", {
            required: "Education is required",
          })}
          id="highestLevelOfEducation"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Highest Level Of Education--
          </option>
          <option value="btech">BTech</option>
          <option value="ba">BA</option>
          <option value="phd">PhD</option>
          <option value="high school">High School</option>
          <option value="secondary school">Secondary School</option>
        </select>

        <select
          {...register("foodChoice", { required: "Food Choice is required" })}
          id="foodChoice"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Food Choice--
          </option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non Vegetarian</option>
        </select>

        <select
          {...register("salaryRange", { required: "Salary Range is required" })}
          id="salaryRange"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            --Salary Range--
          </option>
          <option value="0">&lt; 500000 LPA</option>
          <option value="1">&lt; 1000000 LPA</option>
          <option value="2">&lt; 1500000 LPA</option>
          <option value="3">&lt; 2000000 LPA</option>
          <option value="4">&lt; 3000000 LPA</option>
          <option value="5">&gt; 3000000 LPA</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Hobbies (comma seperated)"
          {...register("hobbies", { required: "Hobbies are required" })}
        />

        <textarea
          {...register("aboutMe", { required: "Write about yourself" })}
          id="aboutMe"
          cols="30"
          rows="3"
          placeholder="About Me"
          className="form-control"
        ></textarea>

        <textarea
          {...register("aboutFamily", { required: "Write about your family" })}
          id="aboutFamily"
          cols="30"
          rows="3"
          placeholder="About Family"
          className="form-control"
        ></textarea>

        <label htmlFor="photos">Upload some photos</label>
        <input
          type="file"
          multiple
          accept="image/*"
          {...register("photos", { required: "At least 1 photo required" })}
          onChange={imageChange}
        />

        {fields.map((field) => (
          <ErrorMessage
            key={field}
            errors={errors}
            name={field}
            render={({ message }) => (
              <p className="lead fs-5 text-danger">{message}</p>
            )}
          />
        ))}

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
