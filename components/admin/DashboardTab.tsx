import React from 'react';
import { useAdminStore } from '../../stores/adminStore';
import { BarChart3, FileText, Settings, TrendingUp, Users, Eye } from 'lucide-react';

export const DashboardTab: React.FC = () => {
  const projects = useAdminStore((state) => state.projects);
  const skills = useAdminStore((state) => state.skills);
  const settings = useAdminStore((state) => state.settings);

  const stats = [
    {
      label: 'Total Projects',
      value: projects.length,
      icon: FileText,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
    },
    {
      label: 'Total Skills',
      value: skills.length,
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
    },
    {
      label: 'Site Views',
      value: '1,234',
      icon: Eye,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
    },
    {
      label: 'Growth Rate',
      value: '+12%',
      icon: TrendingUp,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
    },
  ];

  const recentProjects = projects.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-300/70">Welcome back! Here's an overview of your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="glass-card p-6 hover:scale-[1.02] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor} border border-white/10`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
              <div>
                <p className="text-slate-300/70 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Projects</h3>
          {recentProjects.length > 0 ? (
            <div className="space-y-3">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-3 glass-card--subtle border border-white/10"
                >
                  <div>
                    <p className="text-white font-medium">{project.title}</p>
                    <p className="text-slate-300/70 text-sm">{project.year} • {project.role}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full border ${
                      project.status === 'completed' 
                        ? 'bg-green-400/20 text-green-400 border-green-400/30' 
                        : 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-300/70">No projects yet. Create your first project!</p>
          )}
        </div>

        {/* Site Info */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Site Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between p-3 glass-card--subtle border border-white/10">
              <span className="text-slate-300/70">Site Title</span>
              <span className="text-white">{settings.siteTitle}</span>
            </div>
            <div className="flex justify-between p-3 glass-card--subtle border border-white/10">
              <span className="text-slate-300/70">Hero Title</span>
              <span className="text-white">{settings.heroTitle}</span>
            </div>
            <div className="flex justify-between p-3 glass-card--subtle border border-white/10">
              <span className="text-slate-300/70">Contact Email</span>
              <span className="text-white">{settings.contactEmail}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 glass-card--subtle hover:scale-[1.02] rounded-lg border border-white/20 transition-all duration-200 text-left glass-interactive">
            <FileText size={20} className="text-blue-400 mb-2" />
            <p className="text-white font-medium">Add New Project</p>
            <p className="text-slate-300/70 text-sm">Create a new portfolio project</p>
          </button>
          <button className="p-4 glass-card--subtle hover:scale-[1.02] rounded-lg border border-white/20 transition-all duration-200 text-left glass-interactive">
            <Settings size={20} className="text-green-400 mb-2" />
            <p className="text-white font-medium">Add New Skill</p>
            <p className="text-slate-300/70 text-sm">Add a new skill to your profile</p>
          </button>
          <button className="p-4 glass-card--subtle hover:scale-[1.02] rounded-lg border border-white/20 transition-all duration-200 text-left glass-interactive">
            <BarChart3 size={20} className="text-purple-400 mb-2" />
            <p className="text-white font-medium">View Analytics</p>
            <p className="text-slate-300/70 text-sm">See detailed site statistics</p>
          </button>
        </div>
      </div>
    </div>
  );
};