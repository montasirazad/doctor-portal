import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <div >
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
