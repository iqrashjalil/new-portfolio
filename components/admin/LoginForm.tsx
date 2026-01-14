import React, { useState } from 'react';
import { useAdminStore } from '../../stores/adminStore';

interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAdminStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (login(password)) {
      onSuccess();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="ui-glass ui-gloss-sheen p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Admin Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 glass-card text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all"
              placeholder="Enter admin password"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm text-center bg-red-400/10 p-2 rounded-lg border border-red-400/20">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 glass-button hover:scale-[1.02] text-white font-medium rounded-lg transition-all duration-200"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 text-center text-slate-300/80 text-sm">
          Demo password: admin123
        </div>
      </div>
    </div>
  );
};