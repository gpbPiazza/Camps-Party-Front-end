import React from "react";
import PageContainer from "../../components/PageContainer";
import SideBar from "../../components/SideBar";

const UserDashboard = ({ children }) => (
  <PageContainer>
    <SideBar />
    {children}
  </PageContainer>
);
export default UserDashboard;
