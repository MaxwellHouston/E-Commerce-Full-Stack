import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './account/Register';
import { Login } from './account/Login';
import { Homepage } from './homepage/Homepage';
import { Shop } from './shop/Shop';
import { LoggedInModal } from './Modal/LoggedInModal';
import { LoadUserModal } from './Modal/LoadUserModal';
import { LogoutModal } from './Modal/LogoutModal';
import { Account } from './account/Account';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { LoadCartModal } from './Modal/LoadCartModal';
import { AddressProvider } from './context/AddressContext';
import { SearchProvider } from './context/SearchContext';

function App() {

  return (
    <div className='main'>
      <UserProvider>
        <CartProvider>
          <AddressProvider>
            <SearchProvider>
              <NavBar  />
              <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/shop/*' element={<Shop />} />
                <Route path='/account/*' element={<Account />} />
                <Route path='/login/success' element={<LoggedInModal />} />
                <Route path='/load-user' element={<LoadUserModal /> } />
                <Route path='/load-cart' element={<LoadCartModal /> } />
                <Route path='/logout' element={<LogoutModal  /> } />
              </Routes>
              <AppFooter />
            </SearchProvider>
          </AddressProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
