import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Rockets from './component/Rockets';
import Missions from './component/Missions';
import Dragons from './component/Dragons';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
