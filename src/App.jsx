import { BrowserRouter } from 'react-router-dom';
import './fonts/fonts.css';

import RootLayout from './pages/Root';

function App() {
  return (
  
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
    
  );
}

export default App;
