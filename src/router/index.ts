import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/dashbord";
import Login from "@/pages/login";
import UnReach from "@/pages/unreach";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "*",
    Component: UnReach,
  },
]);

export default router;
