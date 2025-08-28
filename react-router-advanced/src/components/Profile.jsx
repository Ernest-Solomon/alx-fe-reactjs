import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = ({ user }) => {
  const location = useLocation();

  const isActiveTab = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <p>Manage your profile information and settings</p>
      </div>

      {/* Profile Navigation Tabs */}
      <nav className="profile-nav">
        <ul className="profile-tabs">
          <li>
            <Link 
              to="/profile/details" 
              className={`profile-tab ${isActiveTab('details') ? 'active' : ''}`}
            >
              Profile Details
            </Link>
          </li>
          <li>
            <Link 
              to="/profile/settings" 
              className={`profile-tab ${isActiveTab('settings') ? 'active' : ''}`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Nested Route Content */}
      <div className="profile-content">
        <Routes>
          {/* Default redirect to details */}
          <Route index element={<Navigate to="details" replace />} />
          
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails user={user} />} />
          <Route path="settings" element={<ProfileSettings user={user} />} />
          
          {/* Handle unknown nested routes */}
          <Route path="*" element={
            <div className="profile-error">
              <h3>Profile section not found</h3>
              <p>The requested profile section doesn't exist.</p>
              <Link to="/profile/details" className="link-button">
                Go to Profile Details
              </Link>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
