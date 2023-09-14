import Register from './components/register';
import Login from './components/login'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
