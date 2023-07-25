import { Routes, Route } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import HomePage from './Home';
import ProjectsPage from './Projects';
import AboutPage from './About';
import ContactPage from './Contact';
import MusicPage from './Music';

function RootLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-40 bg-gray-800 text-gray z-50">
        <MainNavigation />
      </div>
      <main className="flex-grow p-4 overflow-auto">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/music' element={<MusicPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default RootLayout;
