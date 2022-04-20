import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './Startpage';
import { Register } from './Register';
import { Login } from './Login';
import { Homepage } from './Homepage';

function App() {


  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
