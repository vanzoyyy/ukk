import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = authService.authStatus();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
