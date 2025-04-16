import React from 'react';
import './InputBox.css';

const InputBox = ({ value, onChange, onSend }) => {
  return (
    <div className="inputbox-container">
      <textarea
        className="inputbox"
        value={value}
        onChange={onChange}
        placeholder="Type your message here..."
      />
      <button className="send-button" onClick={onSend}>Send</button>
    </div>
  );
};

export default InputBox;
