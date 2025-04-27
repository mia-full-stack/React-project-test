
import {Routes, Route} from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import CartPage from './CartPage/CartPage';
import CategoryPage from './CategoryPage/CategoryPage';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import ProductItemPage from './ProductItemPage/ProductItemPage';
import SaleProductsPage from './SaleProductsPage/SaleProductsPage';

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/allproducts" element={<AllProductsPage />} />
            <Route path="/product" element={<ProductItemPage />} />
            <Route path="/sales" element={<SaleProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="*" element={<MainPage />} /> Redirect to MainPage for any unknown routes */}
        </Routes>
    );
}
export default Navigation;
