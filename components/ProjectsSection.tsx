
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { FaExternalLinkAlt, FaBriefcase, FaCalendar, FaChartLine, FaCheckCircle, FaCircle, FaGithub } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const ProjectsSection: React.FC = () => {
  const getStatusConfig = (status?: string) => {
    switch (status) {
      case 'live':
        return { label: 'Live', color: 'text-green-400', bgColor: 'bg-green-400/10', icon: FaCircle };
      case 'in-progress':
        return { label: 'In Progress', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10', icon: FaCircle };
      case 'completed':
        return { label: 'Completed', color: 'text-blue-400', bgColor: 'bg-blue-400/10', icon: FaCheckCircle };
      default:
        return null;
    }
  };

  return (
    <Section id="projects" title="Experience & Projects" noWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => {
          const statusConfig = getStatusConfig(project.status);
          
          return (
            <div
              key={index}
              className="group relative flex flex-col glass-card p-6 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Status Badge */}
              {statusConfig && (
                <div className={`mb-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${statusConfig.bgColor} backdrop-blur-sm border border-white/10 self-start`}>
                  <span className={statusConfig.color}>
                    <statusConfig.icon size={8} />
                  </span>
                  <span className={`text-xs font-semibold ${statusConfig.color}`}>{statusConfig.label}</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-4">
                {project.role && (
                  <span className="flex items-center gap-2">
                    <span className="text-blue-400/70">
                      <FaBriefcase size={13} />
                    </span>
                    <span className="font-medium">{project.role}</span>
                  </span>
                )}
                {project.year && (
                  <span className="flex items-center gap-2">
                    <span className="text-blue-400/70">
                      <FaCalendar size={12} />
                    </span>
                    <span>{project.year}</span>
                  </span>
                )}
              </div>

              {/* Stats Card */}
              {project.stats && (
                <div className="glass-button px-4 py-3 inline-flex items-center gap-3 mb-4 self-start rounded-xl">
                  <div className="text-blue-400">
                    <FaChartLine size={18} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{project.stats.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">{project.stats.label}</div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-slate-300 mb-4 leading-relaxed text-sm flex-grow">{project.description}</p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">
                        <HiSparkles size={14} />
                      </span>
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block glass-button text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            
              {/* Footer Actions */}
              <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300 transition-all group/link"
                  >
                    <FaGithub size={16} />
                    <span>View Project</span>
                    <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform inline-block">
                      <FaExternalLinkAlt size={11} />
                    </span>
                  </a>
                )}
                <div className="text-xs text-slate-500 font-mono">#{String(index + 1).padStart(2, '0')}</div>
              </div>

              {/* Enhanced Decorative gradients */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl -z-10 group-hover:from-blue-500/20 group-hover:via-purple-500/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-2xl -z-10 group-hover:from-indigo-500/10 transition-all duration-500" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
