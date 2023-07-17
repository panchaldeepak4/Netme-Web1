import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';
import Form4 from './pages/Form4';
import LocationPicker from './components/LocationPicker';
import Popup from './components/Popup'

import './App.css';

function App() {
  return (
    <>
    <Router >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form1/>}></Route>
        <Route path='/form2' element={<Form2/>}></Route>
        <Route path='/form3' element={<Form3/>}></Route>
        <Route path='/form4' element={<Form4/>}></Route>
      </Routes>
    </Router>
      <LocationPicker />
      {/* < Popup /> */}
      
    </>
  );
}

export default App;
