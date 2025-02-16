import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Transaction from "../pages/transaction";
import TopUp from "../pages/topUp";
import Profile from "../pages/profile";
import History from "../pages/history";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/topup",
      element: <TopUp />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ]);
  return <RouterProvider router={router} />;
}
