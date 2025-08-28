import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust the import path as needed

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth(); // Call the useAuth hook
  const location = useLocation();

  if (isLoading) {
    // You might want to show a loading spinner or skeleton component here
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
