import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { Payment } from './pages/Payment';
import { PaymentSuccess } from './pages/PaymentSuccess';
import { UserProfile } from './pages/UserProfile';
import { UserInfo } from './pages/user/UserInfo';
import { UserAddresses } from './pages/user/UserAddresses';
import { UserOrders } from './pages/user/UserOrders';
import { UserSecurity } from './pages/user/UserSecurity';
import { UserPaymentMethods } from './pages/user/UserPaymentMethods';
import { UserMessages } from './pages/user/UserMessages';
import { UserRefunds } from './pages/user/UserRefunds';
import { UserFavorites } from './pages/user/UserFavorites';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { OrderDetail } from './pages/OrderDetail';
import { RefundRequest } from './pages/RefundRequest';
import { RefundDetail } from './pages/RefundDetail';
import { SearchResults } from './pages/SearchResults';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/category/:categoryId/:subcategory" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/confirm" element={<OrderConfirmation />} />
            <Route path="/order/:orderId" element={<OrderDetail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/refund/request/:orderId" element={<RefundRequest />} />
            <Route path="/refund/:refundId" element={<RefundDetail />} />
            <Route path="/user" element={<UserProfile />}>
              <Route path="profile" element={<UserInfo />} />
              <Route path="addresses" element={<UserAddresses />} />
              <Route path="orders" element={<UserOrders />} />
              <Route path="security" element={<UserSecurity />} />
              <Route path="payment-methods" element={<UserPaymentMethods />} />
              <Route path="messages" element={<UserMessages />} />
              <Route path="refunds" element={<UserRefunds />} />
              <Route path="favorites" element={<UserFavorites />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;