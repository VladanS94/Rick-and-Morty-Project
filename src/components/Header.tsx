import { Link } from "react-router-dom";
import { paths } from "../routes/Routes";
import Switch from "./Switch";
import { auth } from "../firebase/firebase";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      alert("User logged out successfully");
      localStorage.removeItem("authToken");
    });
  };
  const user = useAuth();
  if (!user) {
    return null;
  }
  return (
    <header className="flex justify-end z-10 fixed w-full px-1 md:px-10 py-3 items-center bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100">
      <Link to={paths.characters} className="font-medium md:text-xl">
        Characters
      </Link>
      <button
        onClick={handleLogout}
        className="mx-5 font-medium md:text-xl w-40 h-14 rounded-xl bg-slate-300 dark:bg-gray-700"
      >
        Log Out
      </button>
      <Switch />
    </header>
  );
};

export default Header;
