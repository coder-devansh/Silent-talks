import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandsHelping, 
  FaSignLanguage, 
  FaVideo, 
  FaAccessibleIcon, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaKeyboard,
  FaVolumeUp,
  FaUndo
} from 'react-icons/fa';

function SignnKitAvatar() {
  const [inputText, setInputText] = useState('');
  const [signingText, setSigningText] = useState('');
  const [isSigning, setIsSigning] = useState(false);
  const [history, setHistory] = useState([]);
  const videoRef = useRef(null);
  
  // Sample sign language videos for demonstration
  const signVideos = {
    'hello': 'https://example.com/videos/hello.mp4',
    'thank you': 'https://example.com/videos/thankyou.mp4',
    'help': 'https://example.com/videos/help.mp4',
    'default': 'https://example.com/videos/default.mp4'
  };

  const alphabetButtons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const commonWords = [
    'Hello', 'Help', 'Food', 'Water', 
    'Doctor', 'Emergency', 'Thank You', 
    'Yes', 'No', 'Please'
  ];

  const handleSign = (text) => {
    if (!text.trim()) return;
    
    setSigningText(text);
    setIsSigning(true);
    
    // In a real app, this would fetch the appropriate sign language video
    const videoKey = Object.keys(signVideos).includes(text.toLowerCase()) 
      ? text.toLowerCase() 
      : 'default';
    
    // Simulate video loading
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = signVideos[videoKey];
        videoRef.current.play();
      }
      setIsSigning(false);
      setHistory(prev => [...prev, { text, timestamp: new Date() }]);
    }, 1000);
  };

  const handleKeyPress = (letter) => {
    setInputText(prev => prev + letter);
  };

  const handleClear = () => {
    setInputText('');
  };

  useEffect(() => {
    // Initialize with welcome message
    handleSign('Welcome to SignnKit');
  }, []);

  return (
    <motion.div
      className="container py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">
          <FaHandsHelping className="text-primary me-2" />
          SignnKit Interpreter
        </h1>
        <p className="lead">
          Type or select words to see them signed by our avatar
        </p>
      </header>

      <div className="row">
        {/* Main Interaction Area */}
        <div className="col-lg-8">
          {/* Avatar Video Display */}
          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="ratio ratio-16x9 bg-light">
                {isSigning ? (
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <video 
                    ref={videoRef} 
                    controls 
                    className="w-100 h-100 object-fit-contain"
                    aria-label={`Sign language interpretation for: ${signingText}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            <div className="card-footer bg-white">
              <h5 className="mb-0 text-center">
                <FaSignLanguage className="text-primary me-2" />
                Signing: <strong>{signingText || 'Nothing to display'}</strong>
              </h5>
            </div>
          </div>

          {/* Text Input Area */}
          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-3">
                <FaKeyboard className="text-primary me-2" />
                Enter Text to Sign
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message here..."
                  aria-label="Text input for sign language translation"
                />
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleSign(inputText)}
                  disabled={!inputText.trim()}
                >
                  Sign It
                </button>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="d-flex gap-2 mb-3">
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={handleClear}
                  aria-label="Clear text input"
                >
                  <FaUndo className="me-1" /> Clear
                </button>
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(inputText);
                    window.speechSynthesis.speak(utterance);
                  }}
                  disabled={!inputText.trim()}
                  aria-label="Speak the entered text"
                >
                  <FaVolumeUp className="me-1" /> Speak
                </button>
              </div>
              
              {/* Common Words */}
              <div className="mb-3">
                <h4 className="h6 mb-2">Common Words:</h4>
                <div className="d-flex flex-wrap gap-2">
                  {commonWords.map((word, index) => (
                    <motion.button
                      key={index}
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleSign(word)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {word}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Alphabet Keyboard */}
              <div>
                <h4 className="h6 mb-2">Alphabet:</h4>
                <div className="d-flex flex-wrap gap-2">
                  {alphabetButtons.map((letter, index) => (
                    <motion.button
                      key={index}
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleKeyPress(letter)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Add letter ${letter}`}
                    >
                      {letter}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Panel */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h3 className="h5 mb-3">
                <FaSignLanguage className="text-primary me-2" />
                Sign History
              </h3>
              {history.length === 0 ? (
                <p className="text-muted">Your signed phrases will appear here</p>
              ) : (
                <ul className="list-group list-group-flush">
                  {history.slice().reverse().map((item, index) => (
                    <motion.li 
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div>
                        <div className="fw-bold">{item.text}</div>
                        <small className="text-muted">
                          {item.timestamp.toLocaleTimeString()}
                        </small>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleSign(item.text)}
                        aria-label={`Re-sign: ${item.text}`}
                      >
                        Sign Again
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Features Note */}
      <section className="mt-5 p-4 bg-light rounded-3">
        <h3 className="h5 mb-3">
          <FaAccessibleIcon className="text-primary me-2" />
          Accessibility Features
        </h3>
        <ul>
          <li>All videos include sign language interpretations</li>
          <li>Text-to-speech functionality for visually impaired users</li>
          <li>Keyboard-navigable interface</li>
          <li>High contrast color scheme</li>
        </ul>
      </section>
    </motion.div>
  );
}

export default SignnKitAvatar;