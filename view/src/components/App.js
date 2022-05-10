import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './account/Register';
import { Login } from './account/Login';
import { Homepage } from './Homepage';
import { Shop } from './shop/Shop';
import { UserPage } from './account/UserPage';

function App() {


  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
