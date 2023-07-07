import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Form1 from './pages/Form1';
import './App.css';

function App() {
  return (
    <>
    <Router >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form1/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
