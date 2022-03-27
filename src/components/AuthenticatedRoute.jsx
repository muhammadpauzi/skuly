import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export default function AuthenticatedRoute({ children, roles }) {
  const { user } = useAuth();
  console.log(user);
  if (!user) return <Navigate to="/sign-in" replace />;

  return children;
}
