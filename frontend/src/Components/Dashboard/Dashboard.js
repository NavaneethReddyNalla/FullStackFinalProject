import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!currentUser.profile.profileComplete) {
      navigate(`/${currentUser.username}/edit`);
    }
  }, [currentUser, navigate]);

  return <div>Dashboard</div>;
}

export default Dashboard;
