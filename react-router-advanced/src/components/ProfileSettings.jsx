import { useState } from 'react';

const ProfileSettings = ({ user }) => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showLocation: true
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'America/New_York'
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleNotificationChange = (type) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handlePrivacyChange = (type) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: !prev.privacy[type]
      }
    }));
  };

  const handlePreferenceChange = (type, value) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [type]: value
      }
    }));
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSaving(false);
    alert('Settings saved successfully!');
  };

  const handleResetSettings = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        notifications: {
          email: true,
          push: false,
          sms: false
        },
        privacy: {
          profileVisible: true,
          showEmail: false,
          showLocation: true
        },
        preferences: {
          theme: 'light',
          language: 'en',
          timezone: 'America/New_York'
        }
      });
    }
  };

  return (
    <div className="profile-settings">
      <div className="settings-header">
        <h2>Account Settings</h2>
        <p>Manage your account preferences and privacy settings</p>
      </div>

      <div className="settings-sections">
        {/* Notifications Section */}
        <div className="settings-section">
          <h3>Notifications</h3>
          <div className="setting-item">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={() => handleNotificationChange('email')}
                className="setting-checkbox"
              />
              <span>Email Notifications</span>
            </label>
            <p className="setting-description">Receive notifications via email</p>
          </div>

          <div className="setting-item">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.notifications.push}
                onChange={() => handleNotificationChange('push')}
                className="setting-checkbox"
              />
              <span>Push Notifications</span>
            </label>
            <p className="setting-description">Receive browser push notifications</p>
          </div>

          <div className="setting-item">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.notifications.sms}
                onChange={() => handleNotificationChange('sms')}
                className="setting-checkbox"
              />
              <span>SMS Notifications</span>
            </label>
            <p className="setting-description">Receive notifications via text message</p>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="settings-section">
          <h3>Privacy</h3>
          <div className="setting-item">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.privacy.profileVisible}
                onChange={() => handlePrivacyChange('profileVisible')}
                className="setting-checkbox"
              />
              <span>Public Profile</span>
            </label>
            <p className="setting-description">Make your profile visible to other users</p>
          </div>

          <div className="setting-item">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.privacy.showEmail}
                onChange={() => handlePrivacyChange('showEmail')}
                className="setting-checkbox"
              />
              <span>Show Email Address</span>
            </label>
            <p className="setting-description">Display your email on your public profile</p>
          </div>

          <div className="setting-item">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.privacy.showLocation}
                onChange={() => handlePrivacyChange('showLocation')}
                className="setting-checkbox"
              />
              <span>Show Location</span>
            </label>
            <p className="setting-description">Display your location on your profile</p>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="setting-item">
            <label className="setting-label">Theme</label>
            <select
              value={settings.preferences.theme}
              onChange={(e) => handlePreferenceChange('theme', e.target.value)}
              className="setting-select"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div className="setting-item">
            <label className="setting-label">Language</label>
            <select
              value={settings.preferences.language}
              onChange={(e) => handlePreferenceChange('language', e.target.value)}
              className="setting-select"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          <div className="setting-item">
            <label className="setting-label">Timezone</label>
            <select
              value={settings.preferences.timezone}
              onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
              className="setting-select"
            >
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
              <option value="Europe/London">London</option>
              <option value="Europe/Paris">Paris</option>
              <option value="Asia/Tokyo">Tokyo</option>
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="settings-actions">
        <button
          onClick={handleSaveSettings}
          disabled={isSaving}
          className="save-settings-button"
        >
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
        <button
          onClick={handleResetSettings}
          className="reset-settings-button"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
