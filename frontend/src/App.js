import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import SharedLayout from './screens/SharedLayout';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomeScreen />}/>
          <Route path='product/:id' element={<ProductScreen />} /> 
          <Route path='cart' element={<CartScreen />} />
          <Route path='cart/:id' element={<CartScreen />} />
          <Route path='cart/:id/:qty' element={<CartScreen />} />
          <Route path='login' element={<LoginScreen />} />
          <Route path='register' element={<RegisterScreen />} />
          <Route path='profile' element={<ProfileScreen />} />
          <Route path='shipping' element={<ShippingScreen />}/>
          <Route path='payment' element={<PaymentScreen />}/>
          <Route path='placeorder' element={<PlaceOrderScreen />}/>
          <Route path='order/:id' element={<OrderScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
