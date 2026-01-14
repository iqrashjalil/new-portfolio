'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface StatusDropdownProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

const statusOptions = [
  { value: 'completed', label: 'Completed', color: 'bg-purple-400/20 text-purple-400 border-purple-400/30' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' },
  { value: 'live', label: 'Live', color: 'bg-green-400/20 text-green-400 border-green-400/30' }
]

export default function StatusDropdown({ value, onChange, className = '' }: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const selectedOption = statusOptions.find(option => option.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        const dropdownHeight = 150 // Estimated height
        
        const position = {
          top: spaceBelow < dropdownHeight ? rect.top - dropdownHeight - 8 : rect.bottom + 8,
          left: rect.left,
          width: rect.width
        }
        
        setDropdownPosition(position)
      }
    }

    if (isOpen) {
      updatePosition()
      window.addEventListener('scroll', updatePosition)
      window.addEventListener('resize', updatePosition)
    }
    
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 bg-white/10 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer transition-all duration-200 flex items-center justify-between glass-button hover:bg-white/15"
      >
        <span className="flex items-center gap-2">
          <span className="text-sm">
            {selectedOption?.label}
          </span>
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute z-50 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-xl overflow-hidden glass-card animate-slide-up"
          style={{
            minWidth: '100%',
            top: '100%',
            marginTop: '8px'
          }}
        >
          <div className="py-1">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-4 py-2 text-left flex items-center justify-between transition-colors hover:bg-white/10 ${
                  value === option.value ? 'bg-white/10' : ''
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${option.color}`}>
                    {option.label}
                  </span>
                </span>
                {value === option.value && (
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}