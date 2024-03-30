import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLoginComponent from './components/Login/UserLoginComponent';
import Home from './components/Home/Home';
import InterviewerLoginComponent from './components/Login/InterviewerLoginComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLoginComponent />} />
          <Route path="/interviewer-login" element={<InterviewerLoginComponent />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
