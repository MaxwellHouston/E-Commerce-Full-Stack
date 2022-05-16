import '../App.css';
import { useState, useCallback } from 'react';
import { AppFooter } from './Footer';
import { NavBar } from './navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './account/Register';
import { Login } from './account/Login';
import { Homepage } from './homepage/Homepage';
import { Shop } from './shop/Shop';
import { UserPage } from './account/UserPage';
import { LoggedInModal } from './Modal/LoggedInModal';
import { LoadingModal } from './Modal/LoadingModal';
import { LogoutModal } from './Modal/LogoutModal';

function App() {

  const [user, setUser] = useState({});

  const storeUser = useCallback( (userObject) => {
    setUser(userObject);
  }, []);

  const clearUser = useCallback( () => {
    setUser({});
  }, []);

  return (
    <div className='main'>
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage user={user} />} />
        <Route path='/shop/*' element={<Shop user={user} />} />
        <Route path='/user' element={<UserPage user={user} />} />
        <Route path='/login/success' element={<LoggedInModal  />} />
        <Route path='/welcome' element={<LoadingModal storeUser={storeUser} /> } />
        <Route path='/logout' element={<LogoutModal clearUser={clearUser} /> } />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
