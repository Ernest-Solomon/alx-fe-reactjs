import { useState } from 'react';

const ProfileDetails = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    bio: user?.bio || 'Software developer passionate about React and modern web technologies.',
    location: user?.location || 'New York, NY',
    website: user?.website || 'https://johndoe.dev'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // In a real app, you would save to backend here
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
    setFormData({
      name: user?.name || 'John Doe',
      email: user?.email || 'john.doe@example.com',
      bio: user?.bio || 'Software developer passionate about React and modern web technologies.',
      location: user?.location || 'New York, NY',
      website: user?.website || 'https://johndoe.dev'
    });
  };

  return (
    <div className="profile-details">
      <div className="profile-details-header">
        <h2>Profile Details</h2>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)} 
            className="edit-button"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {formData.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <div className="profile-info">
          {isEditing ? (
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={handleSave} 
                  className="save-button"
                >
                  Save Changes
                </button>
                <button 
                  type="button" 
                  onClick={handleCancel} 
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-display">
              <div className="info-item">
                <strong>Name:</strong> {formData.name}
              </div>
              <div className="info-item">
                <strong>Email:</strong> {formData.email}
              </div>
              <div className="info-item">
                <strong>Bio:</strong> {formData.bio}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {formData.location}
              </div>
              <div className="info-item">
                <strong>Website:</strong> 
                <a 
                  href={formData.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  {formData.website}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
