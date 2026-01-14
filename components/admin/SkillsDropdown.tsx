'use client'

import React, { useState, useRef, useEffect } from 'react'
import { X, ChevronDown, Search } from 'lucide-react'

interface SkillsDropdownProps {
  availableSkills: string[]
  selectedSkills: string[]
  onSkillsChange: (skills: string[]) => void
  placeholder?: string
}

export default function SkillsDropdown({ 
  availableSkills, 
  selectedSkills, 
  onSkillsChange, 
  placeholder = "Select skills..." 
}: SkillsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [dropup, setDropup] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredSkills = availableSkills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSkills.includes(skill)
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    const updatePosition = () => {
      if (isOpen && dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect()
        const dropdownHeight = 300 // Estimated max height
        const spaceBelow = window.innerHeight - rect.bottom
        const spaceAbove = rect.top
        
        if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
          setDropup(true)
        } else {
          setDropup(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    if (isOpen) {
      updatePosition()
      window.addEventListener('scroll', updatePosition)
      window.addEventListener('resize', updatePosition)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  const addSkill = (skill: string) => {
    onSkillsChange([...selectedSkills, skill])
    setSearchTerm('')
  }

  const removeSkill = (skillToRemove: string) => {
    onSkillsChange(selectedSkills.filter(skill => skill !== skillToRemove))
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Selected Skills Tags */}
      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {selectedSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm border border-blue-400/30"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="ml-1 text-blue-300 hover:text-blue-200 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Dropdown Input */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-white/10 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 text-left flex items-center justify-between"
        >
          <span className={selectedSkills.length === 0 ? 'text-slate-400' : 'text-white'}>
            {selectedSkills.length > 0 ? `${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected` : placeholder}
          </span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={`absolute left-0 right-0 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-xl z-50 overflow-hidden glass-card animate-slide-up ${
            dropup ? 'bottom-full mb-2' : 'top-full mt-2'
          }`} style={{ maxHeight: '300px' }}>
            {/* Search Input */}
            <div className="p-3 border-b border-slate-700/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search skills..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                />
              </div>
            </div>

            {/* Skills List */}
            <div className="max-h-48 overflow-y-auto" style={{ maxHeight: '200px' }}>
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => addSkill(skill)}
                    className="w-full px-4 py-2 text-left text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{skill}</span>
                    <span className="text-xs text-slate-500 group-hover:text-blue-400">+ Add</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-slate-500 text-sm text-center">
                  {searchTerm ? 'No skills found' : 'All skills selected'}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}