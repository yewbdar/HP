import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Typography from "../views/Typography/Typography";
import Icons from "../views/Icons/Icons";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import Upgrade from "../views/Upgrade/Upgrade";
import PositionPage from "../views/Recruiter/PositionPage";
import Register from "../views/Candidate/register";
import viewCandidateForRecruiter from "../views/Recruiter/viewCandidateforRecruter";
import viewCandidateForEmployee from "../views/Employee/viewCandidates";
import viewOpenPosition from "../views/Candidate/viewOpenPosition";
import uploadFile from "../views/uploadFile";
import loginPage from "../views/Common/login";

import ViewFeedBack from "../views/Candidate/viewFeedBack";
const dashboardRoutes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    displayFor : ["Candidate"]
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-graph",
    component: loginPage,
    displayFor : ["Candidate"]
  },

  {
    path: "/position",
    name: "Position",
    icon: "pe-7s-user",
    component: PositionPage,
    displayFor : ["Candidate"]
  },
  {
    path: "/viewOpenPosition",
    name: "view open Position",
    icon: "pe-7s-user",
    component: viewOpenPosition,
    displayFor : ["Candidate"]
  },
  {
    path: "/ViewFeedBack",
    name: "View FeedBack",
    icon: "pe-7s-user",
    component: ViewFeedBack,
    displayFor : ["Candidate"]
  },
  {
    path: "/Register",
    name: "Register",
    icon: "pe-7s-user",
    component: Register,
    displayFor : ["Candidate"]
  },
  {
    path: "/viewCandidate",
    name: "view Candidate for Recruiter ",
    icon: "pe-7s-user",
    component: viewCandidateForRecruiter,
    displayFor : ["Candidate"]
  },
  {
    path: "/viewCandidateForFEmployee",
    name: "view Candidate for Employee ",
    icon: "pe-7s-user",
    component: viewCandidateForEmployee,
    displayFor : ["Candidate"]
  },
  {
    path: "/uploadFile",
    name: "Upload File ",
    icon: "pe-7s-user",
    component: uploadFile,
    displayFor : ["Candidate"]
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    displayFor : ["Candidate"]
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    displayFor : ["Candidate"]
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    displayFor : ["Candidate"]
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons ,
    displayFor : ["Candidate"]},
  { path: "/maps", name: "Find Us", icon: "pe-7s-map-marker", component: Maps ,
    displayFor : ["Candidate"]},
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    displayFor : ["Candidate","Recruiter"]
  },

  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
