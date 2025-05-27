import Upload from "../pages/Upload";
import ResumeAnaylze from "../pages/ResumeAnaylze";
import LandingPage from "../pages/LandingPage";

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
];

export default routes;
