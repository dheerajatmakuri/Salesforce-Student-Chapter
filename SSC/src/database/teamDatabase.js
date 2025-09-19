import Dexie from 'dexie';

// Define the database
class TeamDatabase extends Dexie {
  constructor() {
    super('SalesforceTeamDatabase');

    // Define schemas
    this.version(1).stores({
      teamMembers: '++id, name, role, image, linkedin, createdAt, updatedAt'
    });

    // Add hooks for automatic timestamps
    this.teamMembers.hook('creating', function (primKey, obj, trans) {
      obj.createdAt = new Date();
      obj.updatedAt = new Date();
    });

    this.teamMembers.hook('updating', function (modifications, primKey, obj, trans) {
      modifications.updatedAt = new Date();
    });
  }
}

// Create database instance
const db = new TeamDatabase();

// Database operations
export const teamDatabase = {
  // Get all team members
  async getAllMembers() {
    try {
      return await db.teamMembers.orderBy('createdAt').toArray();
    } catch (error) {
      console.error('Error fetching team members:', error);
      throw error;
    }
  },

  // Get member by ID
  async getMemberById(id) {
    try {
      return await db.teamMembers.get(id);
    } catch (error) {
      console.error('Error fetching member:', error);
      throw error;
    }
  },

  // Add new member
  async addMember(memberData) {
    try {
      const id = await db.teamMembers.add({
        name: memberData.name,
        role: memberData.role,
        image: memberData.image,
        linkedin: memberData.linkedin || ''
      });
      return await db.teamMembers.get(id);
    } catch (error) {
      console.error('Error adding member:', error);
      throw error;
    }
  },

  // Update member
  async updateMember(id, updates) {
    try {
      await db.teamMembers.update(id, updates);
      return await db.teamMembers.get(id);
    } catch (error) {
      console.error('Error updating member:', error);
      throw error;
    }
  },

  // Delete member
  async deleteMember(id) {
    try {
      await db.teamMembers.delete(id);
      return true;
    } catch (error) {
      console.error('Error deleting member:', error);
      throw error;
    }
  },

  // Search members by name or role
  async searchMembers(query) {
    try {
      const lowerQuery = query.toLowerCase();
      return await db.teamMembers
        .filter(member =>
          member.name.toLowerCase().includes(lowerQuery) ||
          member.role.toLowerCase().includes(lowerQuery)
        )
        .toArray();
    } catch (error) {
      console.error('Error searching members:', error);
      throw error;
    }
  },

  // Get members by role
  async getMembersByRole(role) {
    try {
      return await db.teamMembers
        .where('role')
        .equals(role)
        .toArray();
    } catch (error) {
      console.error('Error fetching members by role:', error);
      throw error;
    }
  },

  // Bulk import (for migration from JSON)
  async bulkImport(members) {
    try {
      await db.teamMembers.clear(); // Clear existing data
      const membersWithTimestamps = members.map(member => ({
        ...member,
        id: undefined, // Let Dexie auto-generate IDs
        createdAt: new Date(),
        updatedAt: new Date()
      }));
      return await db.teamMembers.bulkAdd(membersWithTimestamps);
    } catch (error) {
      console.error('Error importing members:', error);
      throw error;
    }
  },

  // Check if database is empty
  async isEmpty() {
    try {
      const count = await db.teamMembers.count();
      return count === 0;
    } catch (error) {
      console.error('Error checking if database is empty:', error);
      return true;
    }
  },

  // Clear all data (for testing)
  async clearAll() {
    try {
      await db.teamMembers.clear();
      return true;
    } catch (error) {
      console.error('Error clearing database:', error);
      throw error;
    }
  }
};

export default db;