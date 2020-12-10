/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import {
  HomeOutlined,
  BookOutlined,
  FormOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Container, iconStyle } from "../../styles/userDashboard.styles";

const SideBar = () => (
  <Container>
    <div>
      <Link to="dashboard">
        <BookOutlined style={iconStyle} />
        <p>Resumo</p>
      </Link>
      <Link to="registration">
        <FormOutlined style={iconStyle} />
        <p>Inscrição</p>
      </Link>
      <Link to="hotel">
        <HomeOutlined style={iconStyle} />
        <p>Hotel</p>
      </Link>
      <Link to="activities">
        <ContactsOutlined style={iconStyle} />
        <p>Atividades</p>
      </Link>
    </div>
  </Container>
);

export default SideBar;
