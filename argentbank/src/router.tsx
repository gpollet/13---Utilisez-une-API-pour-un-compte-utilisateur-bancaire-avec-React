import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import User from "./pages/User";
//import { getUserData } from "./api/api";
//import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "user",
        element: <User />,
      },
    ]
  }
])

export default router