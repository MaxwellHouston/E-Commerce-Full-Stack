import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './account/Register';
import { Login } from './account/Login';
import { Homepage } from './homepage/Homepage';
import { Shop } from './shop/Shop';
import { ThirdPartyLoginModal } from './Modal/ThirdPartyLoginModal';
import { LoadUserModal } from './Modal/LoadUserModal';
import { LogoutModal } from './Modal/LogoutModal';
import { Account } from './account/Account';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { LoadCartModal } from './Modal/LoadCartModal';
import { AddressProvider } from './context/AddressContext';
import { SearchProvider } from './context/SearchContext';
import { ComingSoon } from './Information/ComingSoon';
import { Project } from './Information/Project';
import { About } from './Information/About';

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
                <Route path='/login/success' element={<ThirdPartyLoginModal />} />
                <Route path='/load-user' element={<LoadUserModal /> } />
                <Route path='/load-cart' element={<LoadCartModal /> } />
                <Route path='/logout' element={<LogoutModal  /> } />
                <Route path='/track-package' element={<ComingSoon />} />
                <Route path='/cancel-order' element={<ComingSoon />} />
                <Route path='/customer-service' element={<ComingSoon />} />
                <Route path='/project' element={<Project />} />
                <Route path='/about' element={<About />} />
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
