// src/UserInfo.jsx (Props Removed)

import UserDetails from './UserDetails';

// UserInfo no longer receives userData as a prop
function UserInfo() {
  return (
    // UserInfo no longer needs to pass userData down
    <UserDetails />
  );
}

export default UserInfo;
