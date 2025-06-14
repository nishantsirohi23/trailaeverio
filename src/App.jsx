import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PackageDetails from './PackageDetails';
import Services from './pages/Services';
import TopHeader from './components/Header';
import AeroviaAboutUs from './pages/AeroviaAboutUs';
import ContactPage from './pages/ContactPage';
import ContinentalPackages from './pages/PackageExplorer';
import ThailandTravelPage from './pages/ThailandTravelPage';
import ErrorPage from './pages/ErrorPage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import FormSuccessPage from './pages/FormSucessPage';


function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:name" element={<PackageDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AeroviaAboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explorer/:continent?" element={<ContinentalPackages />} />
        <Route path="/exp/:title" element={<ThailandTravelPage />} />
  
        <Route path="/formsuccess" element={<FormSuccessPage />} />
        {/* ✅ Catch-all route for 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SpeedInsights />
    </>
  );
}

export default App;
