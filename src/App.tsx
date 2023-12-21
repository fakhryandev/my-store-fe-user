import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/category" element={<CategoryPage />} />
        <Route path="/admin/product" element={<ProductPage />} />
        <Route path="/admin/productvariant" element={<ProductVariantPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
