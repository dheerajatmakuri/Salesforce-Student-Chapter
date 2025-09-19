import { useState, useEffect, useCallback } from 'react';
import { teamDatabase } from '../database/teamDatabase';

// Custom hook for team members management
export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load team members from database
  const loadTeamMembers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const members = await teamDatabase.getAllMembers();
      setTeamMembers(members);
    } catch (err) {
      setError(err.message);
      console.error('Error loading team members:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add new member
  const addMember = useCallback(async (memberData) => {
    try {
      const newMember = await teamDatabase.addMember(memberData);
      setTeamMembers(prev => [...prev, newMember]);
      return newMember;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // Update member
  const updateMember = useCallback(async (id, updates) => {
    try {
      const updatedMember = await teamDatabase.updateMember(id, updates);
      setTeamMembers(prev =>
        prev.map(member => member.id === id ? updatedMember : member)
      );
      return updatedMember;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // Delete member
  const deleteMember = useCallback(async (id) => {
    try {
      await teamDatabase.deleteMember(id);
      setTeamMembers(prev => prev.filter(member => member.id !== id));
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // Search members
  const searchMembers = useCallback(async (query) => {
    try {
      if (!query.trim()) {
        await loadTeamMembers();
        return;
      }

      setLoading(true);
      const results = await teamDatabase.searchMembers(query);
      setTeamMembers(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [loadTeamMembers]);

  // Initialize database with JSON data if empty
  const initializeDatabase = useCallback(async () => {
    try {
      const isEmpty = await teamDatabase.isEmpty();

      if (isEmpty) {
        console.log('Database is empty, importing from JSON...');

        // Fetch JSON data
        const response = await fetch('/data/team-members.json');
        if (response.ok) {
          const data = await response.json();
          await teamDatabase.bulkImport(data.teamMembers);
          console.log('Successfully imported', data.teamMembers.length, 'team members');
        }
      }

      await loadTeamMembers();
    } catch (err) {
      console.error('Error initializing database:', err);
      setError(err.message);
      setLoading(false);
    }
  }, [loadTeamMembers]);

  // Load data on component mount
  useEffect(() => {
    initializeDatabase();
  }, [initializeDatabase]);

  return {
    teamMembers,
    loading,
    error,
    addMember,
    updateMember,
    deleteMember,
    searchMembers,
    refreshMembers: loadTeamMembers,
    clearError: () => setError(null)
  };
};

// Hook for single member operations
export const useTeamMember = (memberId) => {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMember = async () => {
      if (!memberId) {
        setMember(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const memberData = await teamDatabase.getMemberById(memberId);
        setMember(memberData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMember();
  }, [memberId]);

  return { member, loading, error };
};