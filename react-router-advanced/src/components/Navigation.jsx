import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ isAuthenticated, user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const isActiveLink = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            React Router Advanced
          </Link>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') && location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          
          {/* Dynamic Blog Links */}
          <li className="dropdown">
            <span className="nav-link dropdown-toggle">Blog Posts</span>
            <div className="dropdown-content">
              <Link to="/blog/1" className="dropdown-link">
                Getting Started with React Router
              </Link>
              <Link to="/blog/2" className="dropdown-link">
                Advanced Routing Techniques
              </Link>
              <Link to="/blog/3" className="dropdown-link">
                Protected Routes Best Practices
              </Link>
            </div>
          </li>
          
          {isAuthenticated ? (
            <>
              <li>
                <Link 
                  to="/profile" 
                  className={`nav-link ${isActiveLink('/profile') ? 'active' : ''}`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <span className="nav-user">Welcome, {user?.name}!</span>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-button logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link 
                to="/login" 
                className={`nav-link ${isActiveLink('/login') ? 'active' : ''}`}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
