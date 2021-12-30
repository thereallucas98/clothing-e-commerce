import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HatsPage from '../pages/HatsPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}