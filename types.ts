// User types (existing)
export interface User {
  id: string;
  name: string;
  description?: string;
  primary_skills: string[];
  image?: string;
  about?: string;
  secondary_skills: string[];
  available: boolean;
  socials: Social[];
  location?: string;
  email: string;
  password: string;
  contact_description?: string;
  footer_description?: string;
  created_at: string;
  updated_at: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  image_path?: string;
  created_at: string;
  updated_at: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  role?: string;
  date?: string;
  description?: string;
  features: string[];
  last_link?: string;
  skills?: Skill[]; // Populated through join
  created_at: string;
  updated_at: string;
}

// Junction table types
export interface ProjectSkill {
  id: string;
  project_id: string;
  skill_id: string;
  created_at: string;
}

export interface UserPrimarySkill {
  id: string;
  user_id: string;
  skill_id: string;
  created_at: string;
}

export interface UserSecondarySkill {
  id: string;
  user_id: string;
  skill_id: string;
  created_at: string;
}

// Input types for creating records
export interface CreateUserInput {
  name: string;
  description?: string;
  primary_skills?: string[];
  image?: string;
  about?: string;
  secondary_skills?: string[];
  available?: boolean;
  socials?: Social[];
  location?: string;
  email: string;
  password: string;
  contact_description?: string;
  footer_description?: string;
}

export interface CreateSkillInput {
  name: string;
  image_path?: string;
}

export interface CreateProjectInput {
  title: string;
  role?: string;
  date?: string;
  description?: string;
  features?: string[];
  last_link?: string;
  skill_ids?: string[]; // Array of skill IDs to associate
}

export interface UpdateUserInput {
  name?: string;
  description?: string;
  primary_skills?: string[];
  image?: string;
  about?: string;
  secondary_skills?: string[];
  available?: boolean;
  socials?: Social[];
  location?: string;
  email?: string;
  password?: string;
  contact_description?: string;
  footer_description?: string;
}

export interface UpdateSkillInput {
  name?: string;
  image_path?: string;
}

export interface UpdateProjectInput {
  title?: string;
  role?: string;
  date?: string;
  description?: string;
  features?: string[];
  last_link?: string;
  skill_ids?: string[];
}