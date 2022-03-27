import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export default function AuthenticatedRoute({ children, roles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/sign-in" replace />;

  return children;
}
