import React, { useState } from 'react';

const EmailForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message to send:', message);
    window.location.href = `mailto:recipient@example.com?body=${encodeURIComponent(message)}`;
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const textareaStyle = {
    width: '100%',
    height: '150px',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <div style={{ padding: '20px' }}>
      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)} 
          style={buttonStyle}
        >
          Write Message
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            style={textareaStyle}
          />
          <button 
            type="submit" 
            style={buttonStyle}
          >
            Send Email
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;