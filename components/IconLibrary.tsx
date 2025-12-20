import React from 'react';
import {
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiLangchain,
  SiTypescript,
  SiWebflow
} from 'react-icons/si';
import { Cpu, Zap } from 'lucide-react';

export const NodejsIcon = (props: any) => <SiNodedotjs {...props} />;
export const ExpressIcon = (props: any) => <SiExpress {...props} />;
export const ReactIcon = (props: any) => <SiReact {...props} />;
export const NextjsIcon = (props: any) => <SiNextdotjs {...props} />;
export const MongodbIcon = (props: any) => <SiMongodb {...props} />;
export const PostgresqlIcon = (props: any) => <SiPostgresql {...props} />;
export const LangchainIcon = (props: any) => <SiLangchain {...props} />;
export const TypescriptIcon = (props: any) => <SiTypescript {...props} />;
export const WebflowIcon = (props: any) => <SiWebflow {...props} />;

// Fall back icons
export const PineconeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <defs>
      <linearGradient id="pc-grad" x1="0" x2="1">
        <stop offset="0" stopColor="currentColor" stopOpacity="1" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0.85" />
      </linearGradient>
    </defs>
    <g fill="url(#pc-grad)">
      <path d="M32 6c-5.5 5.5-12 9-12 16 0 5 4 8 12 8s12-3 12-8c0-7-6.5-10.5-12-16z" />
    </g>
    <g fill="currentColor" opacity="0.14">
      <path d="M22 26c2 2 5 3 10 3s8-1 10-3c-4 1-10 1-20 0z" />
      <path d="M18 32c3 3 7 5 14 5s11-2 14-5c-5 2-16 2-28 0z" />
    </g>
    <g fill="white" opacity="0.12">
      <path d="M26 20c1 1 3 1 6 1s5 0 6-1c-2 0-4 0-12 0z" />
      <path d="M24 36c2 1 6 2 8 2s6-1 8-2c-4 1-10 1-16 0z" />
    </g>
  </svg>
);
export const AiIcon = (props: any) => <Cpu {...props} />;
export const BubbleIcon = (props: any) => <Zap {...props} />;
// Ecwid removed — use other integrations or provide official SVG if needed

// Re-export social icons as simple inline svgs to preserve previous behavior
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);
export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-11 6H5v7h3V9zM6.5 6.25a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM18 9h-2.5c-2 0-2.5 1-2.5 2.5V16h3v-4.5c0-.8.2-1.5 1.5-1.5s1.5.7 1.5 1.5V16h3v-5c0-2.5-1.5-5-5-5z" /></svg>
);
export const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.01-7.496 14.01-13.986 0-.213 0-.425-.015-.636.961-.699 1.794-1.574 2.457-2.541z" /></svg>
);
export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.511l7.5 4.688L19.999 6.51V6H4zM4 18h16V8.016l-8 5-8-5V18z" /></svg>
);
