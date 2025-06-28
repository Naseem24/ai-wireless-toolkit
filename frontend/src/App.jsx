import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WirelessSystemPage from './pages/WirelessSystemPage';
import OfdmPage from './pages/OfdmPage';
import LinkBudgetPage from './pages/LinkBudgetPage';
import CellularDesignPage from './pages/CellularDesignPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wireless-system" element={<WirelessSystemPage />} />
        <Route path="/ofdm-systems" element={<OfdmPage />} />
        <Route path="/link-budget" element={<LinkBudgetPage />} />
        <Route path="/cellular-design" element={<CellularDesignPage />} />
      </Routes>
    </div>
  );
}

export default App;