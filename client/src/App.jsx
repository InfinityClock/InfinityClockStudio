import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/Overview';
import Orders from './pages/Orders';
import Workflows from './pages/Workflows';
import Team from './pages/Team';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Dashboard Routes wrapper */}
        <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
        <Route path="/orders" element={<DashboardLayout><Orders /></DashboardLayout>} />
        <Route path="/workflows" element={<DashboardLayout><Workflows /></DashboardLayout>} />
        <Route path="/team" element={<DashboardLayout><Team /></DashboardLayout>} />
        <Route path="/payments" element={<DashboardLayout><Payments /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><div className='p-10 font-bold'>Settings</div></DashboardLayout>} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
