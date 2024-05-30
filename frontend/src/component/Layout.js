// src/Layout.js
import React from 'react';
import '../styles/LayoutStyles.css';
import { Menu } from "antd";
import { Route, Routes, useNavigate } from 'react-router-dom';
import DoctorScheduleForm from './DoctorScheduleForm';

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <HeaderComponent />
      <div className="content-container">
        <SideMenu />
        <Content />
      </div>
      <FooterComponent />
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="header">
      MediAI Connect
    </div>
  );
}

function FooterComponent() {
  return (
    <div className="footer">
      Footer
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();

  return (
    <Menu
      className="side-menu"
      onClick={({ key }) => {
        if (key === "signout") {
        } else {
          navigate(key);
        }
      }}
      items={[
        { label: "Home", key: "/" },
        { label: "Appointment", key: "/Appointment" },
        { label: "Apply Doctor", key: "/ApplyDoctor" },
        { label: "Profile", key: "/Profile" },
        { label: "Signout", key: "/signout", danger: true }
      ]}
    />
  );
}

function Content() {
  return (
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/Appointment' element={<div>Appointment</div>} />
        <Route path='/ApplyDoctor' element={<DoctorScheduleForm />} />
        <Route path='/Profile' element={<div>Profile</div>} />
      </Routes>
  );
}

export default Layout;
