// import
import React, { Component } from "react";
import Dashboard from "views/Dashboard/Dashboard.js";
import CheckInStudents from "views/Dashboard/CheckInStudents";
import UpdateCheckInStudents from "views/Dashboard/UpdateCheckInStudents";
import ReadCheckInStudents from "views/Dashboard/ReadCheckInStudents";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/checkin",
    name: "CheckIn Students",
    rtlName: "CheckInStudents",
    icon: <PersonIcon color="inherit" />,
    component: CheckInStudents,
    layout: "/admin",
  },
  {
    path: "/updatecheckin",
    name: "Update CheckIn Students",
    rtlName: "UpdateCheckInStudents",
    icon: <StatsIcon color="inherit" />,
    component: UpdateCheckInStudents,
    layout: "/admin",
  },
  {
    path: "/readcheckin",
    name: "Read CheckIn Students",
    rtlName: "ReadCheckInStudents",
    icon: <DocumentIcon color="inherit" />,
    component: ReadCheckInStudents,
    layout: "/admin",
  },
];
export default dashRoutes;