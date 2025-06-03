import Upload from "../pages/Upload";
import ResumeAnaylze from "../pages/ResumeAnaylze";
import LandingPage from "../pages/LandingPage";
import ResumesList from "../pages/ResumesList";
import AdminDashboard from '../pages/AdminDashboard';

const routes = [
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/resume-analyze",
    element: <ResumeAnaylze />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/resumes-list",
    element: <ResumesList />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
];

export default routes;
