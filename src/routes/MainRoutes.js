// ==============================|| MAIN ROUTING ||============================== //

import MainLayout from "layout/MainLayout";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      // element: <DashboardDefault />,
    }
  ],
};

export default MainRoutes;
