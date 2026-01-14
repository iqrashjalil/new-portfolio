import React, { useState } from 'react';
import { useAdminStore } from '../../stores/adminStore';
import { Settings, Save, Globe, Mail, User, Github, Linkedin, Twitter } from 'lucide-react';

export const SettingsTab: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  
  const { settings, updateSettings } = useAdminStore();

  React.useEffect(() => {
    setFormData(settings);
  }, [settings]);

  const handleSave = () => {
    updateSettings(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(settings);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-300/70">Manage your site configuration and profile.</p>
        </div>
        
         {!isEditing ? (
           <button
             onClick={() => setIsEditing(true)}
             className="px-4 py-2 glass-button text-white rounded-lg transition-all duration-200 flex items-center space-x-2"
           >
             <Settings size={18} />
             <span className="hidden sm:inline">Edit Settings</span>
             <span className="sm:hidden">Edit</span>
           </button>
         ) : (
           <div className="flex space-x-3">
             <button
               onClick={handleSave}
               className="px-4 py-2 glass-button text-green-400 border border-green-400/30 rounded-lg transition-all duration-200 flex items-center space-x-2"
             >
               <Save size={16} />
               <span className="hidden sm:inline">Save</span>
               <span className="sm:hidden">Save</span>
             </button>
             <button
               onClick={handleCancel}
               className="px-4 py-2 glass-button text-red-400 border border-red-400/30 rounded-lg transition-all duration-200"
             >
               <span className="hidden sm:inline">Cancel</span>
               <span className="sm:hidden">Cancel</span>
             </button>
           </div>
         )}
      </div>

      {/* Site Settings */}
      <div className="glass-card p-4 lg:p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <Globe size={20} className="text-blue-400" />
          <span>Site Settings</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Site Title</label>
            <input
              type="text"
              value={formData.siteTitle || ''}
              onChange={(e) => handleInputChange('siteTitle', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              placeholder="Portfolio"
            />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">Hero Title</label>
            <input
              type="text"
              value={formData.heroTitle || ''}
              onChange={(e) => handleInputChange('heroTitle', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              placeholder="Full Stack Developer"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-white/80 text-sm font-medium mb-2">Hero Subtitle</label>
          <input
            type="text"
            value={formData.heroSubtitle || ''}
            onChange={(e) => handleInputChange('heroSubtitle', e.target.value)}
            disabled={!isEditing}
            className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
              !isEditing ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            placeholder="Building amazing web experiences"
          />
        </div>
        
        <div className="mt-6">
          <label className="block text-white/80 text-sm font-medium mb-2">About Text</label>
          <textarea
            value={formData.aboutText || ''}
            onChange={(e) => handleInputChange('aboutText', e.target.value)}
            disabled={!isEditing}
            rows={4}
            className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
              !isEditing ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            placeholder="Passionate developer with expertise in modern web technologies."
          />
        </div>
      </div>

      {/* Contact Settings */}
      <div className="glass-card p-4 lg:p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <Mail size={20} className="text-green-400" />
          <span>Contact Information</span>
        </h3>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">Contact Email</label>
          <input
            type="email"
            value={formData.contactEmail || ''}
            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
            disabled={!isEditing}
            className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
              !isEditing ? 'opacity-60 cursor-not-allowed' : ''
            }`}
            placeholder="contact@example.com"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="glass-card p-4 lg:p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <User size={20} className="text-purple-400" />
          <span>Social Links</span>
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 flex items-center space-x-2">
              <Github size={16} />
              <span>GitHub</span>
            </label>
            <input
              type="url"
              value={formData.socialLinks?.github || ''}
              onChange={(e) => handleSocialLinkChange('github', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              placeholder="https://github.com/username"
            />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 flex items-center space-x-2">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </label>
            <input
              type="url"
              value={formData.socialLinks?.linkedin || ''}
              onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 flex items-center space-x-2">
              <Twitter size={16} />
              <span>Twitter</span>
            </label>
            <input
              type="url"
              value={formData.socialLinks?.twitter || ''}
              onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              placeholder="https://twitter.com/username"
            />
          </div>
        </div>
      </div>

      {/* Additional Settings */}
      <div className="glass-card p-4 lg:p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Additional Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 glass-card--subtle rounded-lg border border-white/10">
            <div>
              <p className="text-white font-medium">Enable Analytics</p>
              <p className="text-slate-300/70 text-sm">Track visitor statistics and site performance</p>
            </div>
            <button
              disabled={!isEditing}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : 'bg-green-400/30'
              }`}
            >
              <div className="w-5 h-5 bg-green-400 rounded-full transition-transform duration-200 translate-x-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 glass-card--subtle rounded-lg border border-white/10">
            <div>
              <p className="text-white font-medium">Dark Mode</p>
              <p className="text-slate-300/70 text-sm">Enable dark theme by default</p>
            </div>
            <button
              disabled={!isEditing}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : 'bg-blue-400/30'
              }`}
            >
              <div className="w-5 h-5 bg-blue-400 rounded-full transition-transform duration-200 translate-x-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 glass-card--subtle rounded-lg border border-white/10">
            <div>
              <p className="text-white font-medium">Show Contact Form</p>
              <p className="text-slate-300/70 text-sm">Display contact form on the site</p>
            </div>
            <button
              disabled={!isEditing}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                !isEditing ? 'opacity-60 cursor-not-allowed' : 'bg-purple-400/30'
              }`}
            >
              <div className="w-5 h-5 bg-purple-400 rounded-full transition-transform duration-200 translate-x-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Export/Import */}
      <div className="glass-card p-4 lg:p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Data Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 glass-card--subtle hover:scale-[1.02] rounded-lg border border-white/20 transition-all duration-200 text-left glass-interactive">
            <p className="text-white font-medium mb-1">Export Data</p>
            <p className="text-slate-300/70 text-sm">Download all your data as JSON</p>
          </button>
          
          <button className="p-4 glass-card--subtle hover:scale-[1.02] rounded-lg border border-white/20 transition-all duration-200 text-left glass-interactive">
            <p className="text-white font-medium mb-1">Import Data</p>
            <p className="text-slate-300/70 text-sm">Upload data from backup file</p>
          </button>
        </div>
      </div>
    </div>
  );
};