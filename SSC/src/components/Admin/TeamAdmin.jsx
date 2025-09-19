import React, { useState, useEffect } from 'react';
import './TeamAdmin.css';

const TeamAdmin = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMember, setEditingMember] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state for adding/editing members
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    image: '',
    linkedin: ''
  });

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('/data/team-members.json');
      const data = await response.json();
      setTeamMembers(data.teamMembers);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddMember = () => {
    const newMember = {
      id: Date.now().toString(),
      ...formData
    };

    const updatedMembers = [...teamMembers, newMember];
    updateTeamMembers(updatedMembers);

    setFormData({ name: '', role: '', image: '', linkedin: '' });
    setShowAddForm(false);
  };

  const handleEditMember = (member) => {
    setEditingMember(member.id);
    setFormData({
      name: member.name,
      role: member.role,
      image: member.image,
      linkedin: member.linkedin
    });
  };

  const handleSaveEdit = () => {
    const updatedMembers = teamMembers.map(member =>
      member.id === editingMember
        ? { ...member, ...formData }
        : member
    );

    updateTeamMembers(updatedMembers);
    setEditingMember(null);
    setFormData({ name: '', role: '', image: '', linkedin: '' });
  };

  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      const updatedMembers = teamMembers.filter(member => member.id !== id);
      updateTeamMembers(updatedMembers);
    }
  };

  const updateTeamMembers = (updatedMembers) => {
    setTeamMembers(updatedMembers);

    // Create JSON data that should be saved to the file
    const jsonData = { teamMembers: updatedMembers };
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Copy to clipboard
    navigator.clipboard.writeText(jsonString).then(() => {
      alert(`✅ Team members updated! JSON copied to clipboard!

📝 To apply changes:
1. Open /public/data/team-members.json
2. Select all content (Ctrl+A / Cmd+A)
3. Paste the new JSON (Ctrl+V / Cmd+V)
4. Save the file
5. Refresh the website to see changes

The updated JSON has been automatically copied to your clipboard!`);
    }).catch(() => {
      // Fallback if clipboard API fails
      console.log('Updated JSON data:', jsonString);
      alert(`✅ Team members updated!

📝 To apply changes:
1. Copy the JSON from browser console
2. Replace contents of /public/data/team-members.json
3. Save the file
4. Refresh the website to see changes`);
    });
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="team-admin">
      <div className="admin-header">
        <h1>Team Members Admin</h1>
        <div className="header-buttons">
          <button
            className="btn btn-secondary"
            onClick={() => {
              const jsonData = { teamMembers };
              const jsonString = JSON.stringify(jsonData, null, 2);
              navigator.clipboard.writeText(jsonString).then(() => {
                alert('Current team data copied to clipboard! You can paste this into /public/data/team-members.json');
              }).catch(() => {
                console.log('Current JSON data:', jsonString);
                alert('Current team data logged to console. Copy from there to /public/data/team-members.json');
              });
            }}
          >
            Copy Current JSON
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddForm(true)}
          >
            Add New Member
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingMember) && (
        <div className="form-modal">
          <div className="form-container">
            <h2>{editingMember ? 'Edit Member' : 'Add New Member'}</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Image Path:</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="/src/assets/member-photo.png"
                  required
                />
              </div>

              <div className="form-group">
                <label>LinkedIn URL:</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://www.linkedin.com/in/username/"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingMember(null);
                    setFormData({ name: '', role: '', image: '', linkedin: '' });
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={editingMember ? handleSaveEdit : handleAddMember}
                >
                  {editingMember ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Team Members List */}
      <div className="members-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} className="member-photo" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
            <div className="member-actions">
              <button
                className="btn btn-edit"
                onClick={() => handleEditMember(member)}
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => handleDeleteMember(member.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAdmin;