'use client'

import React, { useState } from 'react'
import { useAdminStore, Skill } from '../../stores/adminStore'
import { Plus, Edit2, Trash2, X, Save, Upload, Image as ImageIcon } from 'lucide-react'
import Modal from './Modal'

export default function SkillsPage() {
  const { skills, addSkill, updateSkill, deleteSkill } = useAdminStore()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    image: ''
  })
  const [imagePreview, setImagePreview] = useState<string>('')

  const resetForm = () => {
    setFormData({
      name: '',
      image: ''
    })
    setImagePreview('')
  }

  const handleAddSkill = () => {
    resetForm()
    setEditingSkill(null)
    setIsModalOpen(true)
  }

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill)
    setFormData({
      name: skill.name,
      image: skill.image || ''
    })
    setImagePreview(skill.image || '')
    setIsModalOpen(true)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImagePreview(result)
        setFormData(prev => ({ ...prev, image: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    if (editingSkill) {
      updateSkill(editingSkill.id, formData)
    } else {
      addSkill(formData)
    }

    setIsModalOpen(false)
    setEditingSkill(null)
    resetForm()
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setEditingSkill(null)
    resetForm()
  }

  const handleDelete = (id: string) => {
    deleteSkill(id)
  }

  const SkillModalContent = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">Skill Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
          placeholder="Skill name"
        />
      </div>
      
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">Skill Image *</label>
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-white/20 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden">
              {imagePreview ? (
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      setImagePreview('')
                      setFormData(prev => ({ ...prev, image: '' }))
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500/80 hover:bg-red-500 text-white rounded-full transition-colors z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-white/40" />
                  <p className="mb-2 text-sm text-white/60">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-white/40">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/20 rounded-lg transition-all duration-200 flex items-center space-x-2"
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
        <button
          onClick={handleSave}
          disabled={!formData.name || !formData.image}
          className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          <span>{editingSkill ? 'Update' : 'Add'} Skill</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Skills</h1>
          <p className="text-slate-300/70">Manage your technical skills.</p>
        </div>
        <button
          onClick={handleAddSkill}
          className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Skill</span>
        </button>
      </div>

      {/* Skill Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title={editingSkill ? 'Edit Skill' : 'Add New Skill'}
      >
        <SkillModalContent />
      </Modal>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="glass-card p-4 lg:p-6 hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: skill.color + '20' }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              )}
              <div className="flex space-x-1">
                <button
                  onClick={() => handleEditSkill(skill)}
                  className="p-1.5 text-blue-400 hover:bg-blue-400/20 rounded-lg transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(skill.id)}
                  className="p-1.5 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
              <p className="text-white/60 text-sm mb-2">{skill.icon_name}</p>
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ backgroundColor: skill.color }}
                />
                <span className="text-white/40 text-xs font-mono">{skill.color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {skills.length === 0 && (
        <div className="glass-card p-8 text-center">
          <Plus className="w-12 h-12 text-slate-300/40 mx-auto mb-4" />
          <p className="text-slate-300/70 mb-4">No skills yet. Add your first skill!</p>
          <button
            onClick={handleAddSkill}
            className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2 mx-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Skill</span>
          </button>
        </div>
      )}
    </div>
  )
}