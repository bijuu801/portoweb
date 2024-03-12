import { Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import ProjectsPage from './Projects';
import AboutPage from './About';
import ContactPage from './Contact';
import MusicPage from './Music';
import BlogPage from './Blog';

function RootLayout() {
  return (
    <div>
      <main className="relative top-0 left-0 w-full h-full overflow-auto bg-[#1a5739]">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/music' element={<MusicPage />} />
          {/* <Route path='/blog' element={<BlogPage />} /> */}
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default RootLayout;