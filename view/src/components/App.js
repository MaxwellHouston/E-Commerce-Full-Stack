import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './account/Register';
import { Login } from './account/Login';
import { Homepage } from './Homepage';
import { Shop } from './shop/Shop';
import { ShopSports } from './shop/ShopSports';
import { ShopCategories } from './shop/ShopCategories';
import { ShopSportsCategories } from './shop/ShopSportsCategories';

function App() {


  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='shop/:sport' element={<ShopSports />} />
        <Route path='shop/all/:category' element={<ShopCategories />} />
        <Route path='shop/:sport/:category' element={<ShopSportsCategories />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
