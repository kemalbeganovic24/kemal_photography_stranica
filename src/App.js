import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Theme appearance="inherit" radius="large" scaling="100%">
        <Router>
          <main className="min-h-screen font-inter">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/event/:eventId" element={<EventDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer position="bottom-right" autoClose={4000} />
          </main>
        </Router>
      </Theme>
  );
}

export default App;
