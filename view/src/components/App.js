import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Homepage';
import { Register } from './Register';

function App() {


  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
