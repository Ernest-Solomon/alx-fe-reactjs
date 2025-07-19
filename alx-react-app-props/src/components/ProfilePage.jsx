// src/ProfilePage.jsx (Props Removed)

import UserInfo from './UserInfo';

// ProfilePage no longer receives userData as a prop
function ProfilePage() {
  return (
    // ProfilePage no longer needs to pass userData down
    <UserInfo />
  );
}

export default ProfilePage;
