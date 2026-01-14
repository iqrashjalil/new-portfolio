
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingLogosBackground from './components/FloatingLogosBackground';
import CursorGlow from './components/CursorGlow';

// Admin components
import { LoginForm } from './components/admin/LoginForm';
import { AdminLayout } from './components/admin/AdminLayout';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { DashboardTab } from './components/admin/DashboardTab';
import { ContentTab } from './components/admin/ContentTab';
import { SettingsTab } from './components/admin/SettingsTab';
import ProjectsPage from './components/admin/ProjectsPage';
import SkillsPage from './components/admin/SkillsPage';

const Portfolio: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden antialiased">
      <FloatingLogosBackground />
      <CursorGlow />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Portfolio Routes */}
        <Route path="/*" element={<Portfolio />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<LoginForm onSuccess={() => window.location.href = '/admin'} />} />
        
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<DashboardTab />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="settings" element={<SettingsTab />} />
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
