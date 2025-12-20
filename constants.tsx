
import React from 'react';
import { type Skill, type Project, type SocialLink } from './types';
import {
  NodejsIcon, ExpressIcon, ReactIcon, NextjsIcon, MongodbIcon, PostgresqlIcon,
  PineconeIcon, LangchainIcon, AiIcon, TypescriptIcon, BubbleIcon, WebflowIcon,
  GithubIcon, LinkedinIcon, TwitterIcon, MailIcon
} from './components/IconLibrary';

export const SKILLS: Skill[] = [
  { name: 'Node.js', Icon: NodejsIcon, color: '#68A063' },
  { name: 'Express.js', Icon: ExpressIcon, color: '#FFFFFF' },
  { name: 'React', Icon: ReactIcon, color: '#61DAFB' },
  { name: 'Next.js', Icon: NextjsIcon, color: '#FFFFFF' },
  { name: 'MongoDB', Icon: MongodbIcon, color: '#4DB33D' },
  { name: 'PostgreSQL', Icon: PostgresqlIcon, color: '#336791' },
  { name: 'Pinecone', Icon: PineconeIcon, color: '#3E7BFF' },
  { name: 'LangChain', Icon: LangchainIcon, color: '#A374FF' },
  { name: 'AI Integrations', Icon: AiIcon, color: '#F06292' },
  { name: 'TypeScript', Icon: TypescriptIcon, color: '#3178C6' },
  { name: 'Bubble.io', Icon: BubbleIcon, color: '#FF3D00' },
  { name: 'Webflow', Icon: WebflowIcon, color: '#4353FF' },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered E-commerce Platform',
    description: 'Developed a full-stack e-commerce solution with personalized product recommendations using LangChain and a Pinecone vector database. Integrated with Ecwid for seamless checkout.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Pinecone', 'LangChain'],
    link: 'https://github.com',
    role: 'Full Stack Developer',
    year: '2024',
    stats: { label: 'Users', value: '10K+' },
    highlights: ['35% increase in conversion', 'AI-powered recommendations', 'Real-time inventory sync'],
    status: 'live'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Built a dynamic dashboard for visualizing complex data streams, using React for the frontend and Express.js with PostgreSQL for a robust backend API.',
    tags: ['React', 'Express.js', 'PostgreSQL', 'Node.js'],
    link: 'https://github.com',
    role: 'Frontend Lead',
    year: '2023',
    stats: { label: 'Data Points', value: '1M+' },
    highlights: ['Sub-second query response', 'Custom visualization engine', 'Multi-tenant architecture'],
    status: 'live'
  },
  {
    title: 'No-Code Solution Builder',
    description: 'Created a client portal using Bubble.io and Webflow, demonstrating expertise in low-code/no-code platforms to deliver rapid prototypes and full-fledged applications.',
    tags: ['Bubble.io', 'Webflow', 'API Integration'],
    link: 'https://github.com',
    role: 'Solutions Architect',
    year: '2024',
    stats: { label: 'Projects', value: '25+' },
    highlights: ['90% faster development', 'Zero-code deployment', 'Custom API integrations'],
    status: 'completed'
  },
  {
    title: 'Content Generation API',
    description: 'An AI-driven API service that generates marketing copy, blog posts, and social media updates. Built with Express.js and integrated with large language models.',
    tags: ['Node.js', 'Express.js', 'AI', 'API'],
    link: 'https://github.com',
    role: 'Backend Developer',
    year: '2023',
    stats: { label: 'Requests/day', value: '50K+' },
    highlights: ['99.9% uptime', 'Multi-model support', 'Context-aware generation'],
    status: 'live'
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', Icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com', Icon: LinkedinIcon },
    { name: 'Twitter', url: 'https://twitter.com', Icon: TwitterIcon },
    { name: 'Email', url: 'mailto:developer@example.com', Icon: MailIcon },
];
