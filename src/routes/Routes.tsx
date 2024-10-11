import { useRoutes } from "react-router-dom";
import SingleCharacter from "../pages/SingleCharacter";
import SignUp from "../pages/SignUp";
import Login from "../pages/LogIn";
import Characters from "../pages/Characters";
import SingleEpisode from "../pages/SingleEpisode";
import Location from "../pages/Location";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

export const paths = Object.freeze({
  characters: "/",
  id: "/character/:id",
  episodeId: "/episode/:id",
  location: "/location/:id",
  error: "/error",
  login: "/login",
  signup: "/signup",
});

const Routes = () => {
  return useRoutes([
    {
      path: paths.characters,
      element: (
        <ProtectedRoute>
          <Characters />,
        </ProtectedRoute>
      ),
    },
    {
      path: paths.id,
      element: (
        <ProtectedRoute>
          <SingleCharacter />,
        </ProtectedRoute>
      ),
    },
    {
      path: paths.episodeId,
      element: (
        <ProtectedRoute>
          <SingleEpisode />,
        </ProtectedRoute>
      ),
    },
    {
      path: paths.location,
      element: (
        <ProtectedRoute>
          <Location />,
        </ProtectedRoute>
      ),
    },
    {
      path: paths.error,
      element: <ErrorPage />,
    },
    {
      path: paths.login,
      element: <Login />,
    },
    {
      path: paths.signup,
      element: <SignUp />,
    },
  ]);
};

export default Routes;
