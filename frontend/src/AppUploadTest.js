import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState("");
  const [imageFile, setFile] = useState();

  function getImage(event) {
    setFile(event.target.files[0]);
  }

  async function handleFormSubmit(data) {
    const formData = new FormData();

    formData.append("username", data.username);
    formData.append("profile", imageFile);

    const res = await axios.post("/upload", formData);

    if (res.data.message === "Image Uploaded") {
      setImage(res.data.url);
    } else {
      console.log(res.data.message);
    }

    for (let entry of formData.entries()) {
      console.log(entry);
    }
    console.log(data);
  }

  return (
    <div className="App text-center">
      <div className="image-box mx-auto">
        <img src={image} alt="preview" width="100%" height="100%" />
      </div>
      <div className="text-center p-5">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            type="file"
            {...register("profile")}
            id="profile"
            accept="image/*"
            onChange={getImage}
          />
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Username *"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
