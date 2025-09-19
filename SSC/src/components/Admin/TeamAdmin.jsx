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

    // Note: In a real implementation, you would send this to a backend API
    // For this demo, we'll show the JSON that should be saved
    const jsonData = { teamMembers: updatedMembers };
    console.log('Updated JSON data:', JSON.stringify(jsonData, null, 2));

    // Show instructions to user
    alert(`Team members updated!

To apply changes:
1. Copy the JSON from browser console
2. Replace contents of /public/data/team-members.json
3. Refresh the website

(In production, this would update automatically)`);
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="team-admin">
      <div className="admin-header">
        <h1>Team Members Admin</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowAddForm(true)}
        >
          Add New Member
        </button>
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