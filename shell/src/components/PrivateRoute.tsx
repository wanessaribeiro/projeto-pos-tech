import { Navigate, Outlet } from "react-router-dom";
import { useAuthProvider } from "../context/AuthContext";


const PrivateRoute = () => {
  const {user} = useAuthProvider();
  if (user.id === '0') return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;