import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  role: string;
  year: string;
  status: string;
  features: string[];
  skills: string[];
}

export interface Skill {
  id: string;
  name: string;
  color: string;
  icon_name: string;
  image?: string;
}

export interface AdminSettings {
  siteTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  contactEmail: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

interface AdminStore {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  
  projects: Project[];
  skills: Skill[];
  settings: AdminSettings;
  
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  
  updateSettings: (settings: Partial<AdminSettings>) => void;
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      
      login: (password: string) => {
        const ADMIN_PASSWORD = 'admin123';
        if (password === ADMIN_PASSWORD) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      
      logout: () => {
        set({ isAuthenticated: false });
      },
      
      projects: [],
      skills: [],
      settings: {
        siteTitle: 'Portfolio',
        heroTitle: 'Full Stack Developer',
        heroSubtitle: 'Building amazing web experiences',
        aboutText: 'Passionate developer with expertise in modern web technologies.',
        contactEmail: 'contact@example.com',
        socialLinks: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com'
        }
      },
      
      addProject: (project) => {
        const newProject = {
          ...project,
          id: Date.now().toString(),
        };
        set((state) => ({
          projects: [...state.projects, newProject],
        }));
      },
      
      updateProject: (id, updatedProject) => {
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id ? { ...project, ...updatedProject } : project
          ),
        }));
      },
      
      deleteProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        }));
      },
      
      addSkill: (skill) => {
        const newSkill = {
          ...skill,
          id: Date.now().toString(),
        };
        set((state) => ({
          skills: [...state.skills, newSkill],
        }));
      },
      
      updateSkill: (id, updatedSkill) => {
        set((state) => ({
          skills: state.skills.map((skill) =>
            skill.id === id ? { ...skill, ...updatedSkill } : skill
          ),
        }));
      },
      
      deleteSkill: (id) => {
        set((state) => ({
          skills: state.skills.filter((skill) => skill.id !== id),
        }));
      },
      
      updateSettings: (newSettings) => {
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        }));
      },
    }),
    {
      name: 'admin-store',
    }
  )
);