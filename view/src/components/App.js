import '../App.css';
import { AppFooter } from './Footer';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Homepage';

function App() {


  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
