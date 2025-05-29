import Upload from "../pages/Upload";
import ResumeAnaylze from "../pages/ResumeAnaylze";
import LandingPage from "../pages/LandingPage";
import ResumesList from "../pages/ResumesList";

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
];

export default routes;
