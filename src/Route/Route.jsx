import { createBrowserRouter } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
]);

export default router;
