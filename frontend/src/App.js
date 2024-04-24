import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import Matches from "./Components/Matches/Matches";
import ProfileView from "./Components/ProfileView/ProfileView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        {
          path: ":username",
          element: <Profile />,
          children: [
            {
              path: "",
              element: <Dashboard />,
              children: [{ path: "", element: <Matches /> }],
            },
            { path: "edit", element: <ProfileForm /> },
            { path: "match", element: <ProfileView /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
