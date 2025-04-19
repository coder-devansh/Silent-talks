import React, { useState } from 'react';
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
import Convert from './pages/convert';
// import NotePad from './components/Notepad';
import VisionSpeak from './pages/visionSpeak';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const handleSend = (message) => {
    console.log('Message sent:', message);
    setInput('');
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const hideInputRoutes = ['/signin', '/signup', '/signkit'];

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signkit" element={<SignKit />} />
          <Route path="/convert" element ={<Convert/>}/>
          <Route path="/notes" element ={<VisionSpeak/>}/>
        </Routes>

        {!hideInputRoutes.includes(location.pathname) && (
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

        {showAvatar && !hideInputRoutes.includes(location.pathname) && (
          <div className="avatar-container">
            <AvatarSign message={input} />
          </div>
        )}
      </main>

      <button className={`chat-toggle ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isChatOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-chat-dots-fill"></i>
        )}
      </button>

      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-card">
            <ChatBot />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
