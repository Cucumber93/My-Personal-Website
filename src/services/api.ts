import type { Project } from '../types/project';

const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Fetch all projects from the API
 * @param userId Optional user ID to filter projects
 * @returns Array of projects
 */
export const getProjects = async (userId?: number): Promise<Project[]> => {
  try {
    const url = userId 
      ? `${API_BASE_URL}/projects?userId=${userId}`
      : `${API_BASE_URL}/projects`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Search projects by name
 * @param query Search query
 * @param userId Optional user ID to filter projects
 * @returns Array of matching projects
 */
export const searchProjects = async (query: string, userId?: number): Promise<Project[]> => {
  try {
    const url = userId
      ? `${API_BASE_URL}/projects/search?q=${encodeURIComponent(query)}&userId=${userId}`
      : `${API_BASE_URL}/projects/search?q=${encodeURIComponent(query)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to search projects');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching projects:', error);
    throw error;
  }
};

