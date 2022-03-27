import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

export default function UnAuthenticatedRoute({ children, roles }) {
    const { user } = useAuth();
    if (user) return <Navigate to="/" replace />;

    return children;
}
