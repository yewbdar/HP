import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Typography from "../views/Typography/Typography";
import Icons from "../views/Icons/Icons";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import Upgrade from "../views/Upgrade/Upgrade";
import PositionPage from "../views/Recruiter/PositionPage";
import CandidatePage from "../views/Recruiter/CandidatePage";
import viewCandidateForRecruiter from "../views/Recruiter/viewCandidateforRecruter";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/position",
    name: "Position",
    icon: "pe-7s-user",
    component: PositionPage
  },
  {
    path: "/Candidate",
    name: "Candidate",
    icon: "pe-7s-user",
    component: CandidatePage
  },
  {
    path: "/viewCandidate",
    name: "view Candidate for Recruiter ",
    icon: "pe-7s-user",
    component: viewCandidateForRecruiter
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Find Us", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },

  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
