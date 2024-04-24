import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!currentUser.profile.profileComplete) {
      navigate(`/${currentUser.username}/edit`);
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
