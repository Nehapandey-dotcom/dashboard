import './App.css';
import './Responsive.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Landing/*" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
