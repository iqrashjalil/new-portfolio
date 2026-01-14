'use client'

import React, { useState } from 'react'
import { useAdminStore, Project } from '../../stores/adminStore'
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react'
import SkillsDropdown from './SkillsDropdown'
import StatusDropdown from './StatusDropdown'

const availableSkills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
  'Tailwind CSS', 'HTML', 'CSS', 'MongoDB', 'PostgreSQL', 'MySQL',
  'Express.js', 'GraphQL', 'REST API', 'Git', 'Docker', 'AWS',
  'Vue.js', 'Angular', 'Svelte', 'Redux', 'Webpack', 'Vite'
]

export default function ProjectsPage() {
  const { projects, addProject, updateProject, deleteProject } = useAdminStore()
  
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [editingProject, setEditingProject] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    role: '',
    year: '',
    description: '',
    link: '',
    status: 'in-progress',
    features: [''],
    skills: [] as string[]
  })

  const resetForm = () => {
    setFormData({
      title: '',
      role: '',
      year: '',
      description: '',
      link: '',
      status: 'in-progress',
      features: [''],
      skills: []
    })
  }

  const handleAddProject = () => {
    setIsAddingProject(true)
    resetForm()
    setEditingProject(null)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project.id)
    setFormData({
      title: project.title,
      role: project.role,
      year: project.year,
      description: project.description,
      link: project.link,
      status: project.status,
      features: project.features?.length > 0 ? project.features : [''],
      skills: project.skills || []
    })
    setIsAddingProject(false)
  }

  const handleSave = () => {
    const projectData = {
      ...formData,
      features: formData.features.filter(f => f.trim() !== '')
    }

    if (editingProject) {
      updateProject(editingProject, projectData)
    } else {
      addProject(projectData)
    }

    setIsAddingProject(false)
    setEditingProject(null)
    resetForm()
  }

  const handleCancel = () => {
    setIsAddingProject(false)
    setEditingProject(null)
    resetForm()
  }

  const handleDelete = (id: string) => {
    deleteProject(id)
  }

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }))
  }

  const removeFeature = (index: number) => {
    if (formData.features.length > 1) {
      setFormData(prev => ({
        ...prev,
        features: prev.features.filter((_, i) => i !== index)
      }))
    }
  }

  const updateFeature = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }))
  }

  const ProjectForm = () => (
    <div className="glass-card p-4 lg:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          {editingProject ? 'Edit Project' : 'Add New Project'}
        </h3>
        <button
          onClick={handleCancel}
          className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Title *</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
            placeholder="Project title"
          />
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Role *</label>
          <input
            type="text"
            required
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
            className="w-full px-4 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
            placeholder="Your role"
          />
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Date *</label>
          <input
            type="text"
            required
            value={formData.year}
            onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
            className="w-full px-4 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
            placeholder="2024 or 2024-2025"
          />
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Status</label>
          <StatusDropdown
            value={formData.status}
            onChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">Description *</label>
        <textarea
          required
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-4 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
          rows={4}
          placeholder="Project description"
        />
      </div>

      {/* Features */}
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">Features</label>
        <div className="space-y-2">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                className="flex-1 px-3 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                placeholder="Feature description"
              />
              {formData.features.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="px-3 py-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="px-4 py-2 bg-blue-400/20 hover:bg-blue-400/30 text-blue-400 border border-blue-400/30 rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Feature
          </button>
        </div>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">Skills Used</label>
        <SkillsDropdown
          availableSkills={availableSkills}
          selectedSkills={formData.skills}
          onSkillsChange={(skills) => setFormData(prev => ({ ...prev, skills }))}
        />
      </div>
      
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">Project Link</label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
          className="w-full px-4 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
          placeholder="https://github.com/username/project"
        />
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleSave}
          className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{editingProject ? 'Update' : 'Add'} Project</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-slate-300/70">Manage your portfolio projects.</p>
        </div>
        {!isAddingProject && !editingProject && (
          <button
            onClick={handleAddProject}
            className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Project</span>
          </button>
        )}
      </div>

      {/* Project Form */}
      {(isAddingProject || editingProject) && <ProjectForm />}

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card p-4 lg:p-6 hover:scale-[1.01] transition-all duration-200"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/60 mb-3">{project.description}</p>
                
                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-3">
                    <p className="text-white/40 text-sm mb-2">Features:</p>
                    <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                      {project.features.filter(f => f.trim()).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                {project.skills && project.skills.length > 0 && (
                  <div className="mb-3">
                    <p className="text-white/40 text-sm mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full border border-blue-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'completed' 
                      ? 'bg-green-400/20 text-green-400' 
                      : project.status === 'in-progress'
                      ? 'bg-yellow-400/20 text-yellow-400'
                      : 'bg-purple-400/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2 lg:ml-4">
                <button
                  onClick={() => handleEditProject(project)}
                  className="p-2 text-blue-400 hover:bg-blue-400/20 rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && !isAddingProject && !editingProject && (
        <div className="glass-card p-8 text-center">
          <Plus className="w-12 h-12 text-slate-300/40 mx-auto mb-4" />
          <p className="text-slate-300/70 mb-4">No projects yet. Create your first project!</p>
          <button
            onClick={handleAddProject}
            className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2 mx-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>
      )}
    </div>
  )
}