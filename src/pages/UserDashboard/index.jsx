import React, { useContext } from "react";
import PageContainer from "../../components/PageContainer";
import UserContext from "../../contexts/UserContext";

const UserDashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <PageContainer />;
};

export default UserDashboard;
