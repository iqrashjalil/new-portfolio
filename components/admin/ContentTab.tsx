'use client'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, Code, ArrowRight } from 'lucide-react'

export const ContentTab: React.FC = () => {
  const navigate = useNavigate()

  const contentSections = [
    {
      title: 'Projects',
      description: 'Manage your portfolio projects, add new ones, edit existing projects with features and skills.',
      icon: FileText,
      path: '/admin/projects',
      color: 'blue'
    },
    {
      title: 'Skills',
      description: 'Manage your technical skills, add new technologies, and customize their appearance.',
      icon: Code,
      path: '/admin/skills',
      color: 'green'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Content Management</h1>
        <p className="text-slate-300/70">Manage your portfolio content through dedicated pages.</p>
      </div>

      {/* Content Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentSections.map((section) => {
          const Icon = section.icon
          const colorClasses = {
            blue: 'bg-blue-400/20 text-blue-400 border-blue-400/30 hover:bg-blue-400/30',
            green: 'bg-green-400/20 text-green-400 border-green-400/30 hover:bg-green-400/30'
          }

          return (
            <div
              key={section.path}
              className="glass-card p-6 lg:p-8 hover:scale-[1.02] transition-all duration-200 cursor-pointer group"
              onClick={() => navigate(section.path)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${colorClasses[section.color as keyof typeof colorClasses]} transition-all duration-200 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300/40 group-hover:text-slate-300/70 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
              <p className="text-slate-300/70 text-sm leading-relaxed mb-4">
                {section.description}
              </p>
              
              <div className="flex items-center text-sm text-slate-300/60 group-hover:text-white transition-colors">
                <span>Manage {section.title.toLowerCase()}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/admin/projects')}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-white">Projects</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300/40" />
          </button>
          
          <button
            onClick={() => navigate('/admin/skills')}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <div className="flex items-center space-x-3">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-white">Skills</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300/40" />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="glass-card--subtle p-6 text-center">
        <FileText className="w-12 h-12 text-slate-300/40 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">Organized Content Management</h3>
        <p className="text-slate-300/70 max-w-2xl mx-auto">
          Your content management is now organized into dedicated pages for better workflow. 
          Each page provides focused tools and interfaces tailored for specific content types.
        </p>
      </div>
    </div>
  )
}