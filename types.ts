
import React from 'react';

export interface Skill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  role?: string;
  year?: string;
  stats?: {
    label: string;
    value: string;
  };
  highlights?: string[];
  status?: 'completed' | 'in-progress' | 'live';
}

export interface SocialLink {
    name: string;
    url: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
