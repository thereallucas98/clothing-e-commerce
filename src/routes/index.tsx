import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
// import HatsPage from '../pages/HatsPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import SignInAndSignUp from '../pages/SignInAndSignUp';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}