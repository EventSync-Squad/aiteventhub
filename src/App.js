import Register from './components/register';
import Login from './components/login'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Calendar from './components/calendar/calendar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="calendar" element={<Calendar/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
