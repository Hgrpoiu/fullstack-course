import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes(props) {
  return props.conditional ? <Outlet /> : <Navigate to={props.to} />;
}

export default PrivateRoutes;
