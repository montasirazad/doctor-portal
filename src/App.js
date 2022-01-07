import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
