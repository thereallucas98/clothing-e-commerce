import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HatsPage from '../pages/HatsPage';
import HomePage from '../pages/HomePage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}