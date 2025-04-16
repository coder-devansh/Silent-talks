import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InputBox from './components/InputBox';
import AvatarSign from './components/AvatarSign';
import ChatBot from './pages/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignKit from './pages/SignKit';
import './App.css';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSend = (message) => {
    console.log('Message sent:', message);
    setInput('');
  };

  const toggleChat = () => {
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    setIsChatOpen(!isChatOpen);
  };

  // Handle login
  const handleLogin = (userData, token) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  // Routes where InputBox and AvatarSign should be hidden
  const hideInputRoutes = ['/signin', '/signup', '/signkit'];

  return (
    <div className="app-container">
      {/* Header with authentication status */}
      <Header 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={handleLogout}
      />

      {/* Main Routes */}
      <main className="main-content">
      <Routes>
  <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route 
    path="/signin" 
    element={<SignIn onLogin={handleLogin} />} 
  />
  <Route path="/signup" element={<SignUp />} />
  <Route 
    path="/signkit" 
    element={<SignKit isAuthenticated={isAuthenticated} />} 
  />
</Routes>

        {/* InputBox - visible only on selected routes and when authenticated */}
        {!hideInputRoutes.includes(location.pathname) && isAuthenticated && (
          <div className="input-section">
            <InputBox 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onSend={handleSend}
            />
            <button 
              className={`avatar-toggle ${showAvatar ? 'active' : ''}`}
              onClick={() => setShowAvatar(!showAvatar)}
            >
              {showAvatar ? 'Hide Avatar' : 'Show Avatar'}
            </button>
          </div>
        )}

        {/* AvatarSign - Conditionally shown */}
        {showAvatar && !hideInputRoutes.includes(location.pathname) && isAuthenticated && (
          <div className="avatar-container">
            <AvatarSign message={input} />
          </div>
        )}
      </main>

      {/* ChatBot Toggle Button */}
      {isAuthenticated && (
        <button className={`chat-toggle ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
          {isChatOpen ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-chat-dots-fill"></i>
          )}
        </button>
      )}

      {/* ChatBot */}
      <div className={`chatbot-wrapper ${isChatOpen ? 'open' : ''}`}>
        {isAuthenticated ? (
          <ChatBot onClose={toggleChat} user={user} />
        ) : (
          <div className="login-prompt">
            <p>Please login to access the chat</p>
            <button onClick={() => navigate('/signin')}>Login</button>
          </div>
        )}
      </div>

      {/* Footer - Visible on all pages */}
      <Footer />
    </div>
  );
};

export default App;