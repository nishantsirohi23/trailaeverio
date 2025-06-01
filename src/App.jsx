import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PackageDetails from './PackageDetails';
import Services from './pages/Services';
import TopHeader from './components/Header';
import AeroviaAboutUs from './pages/AeroviaAboutUs';

function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:name" element={<PackageDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AeroviaAboutUs />} />

      </Routes>
    </>
  );
}

export default App;
