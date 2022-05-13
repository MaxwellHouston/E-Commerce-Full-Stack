import '../App.css';
import { useState } from 'react';
import { AppFooter } from './Footer';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './account/Register';
import { Login } from './account/Login';
import { Homepage } from './homepage/Homepage';
import { Shop } from './shop/Shop';
import { UserPage } from './account/UserPage';
import { LoggedInModal } from './Modal/LoggedInModal';
import { LoadingModal } from './Modal/LoadingModal';

function App() {

  const [user, setUser] = useState({});

  const storeUser = (userObject) => {
    setUser(userObject);
  }

  return (
    <div className='main'>
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage user={user} />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='login/success' element={<LoggedInModal  />} />
        <Route path='/welcome' element={<LoadingModal storeUser={storeUser} /> } />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
