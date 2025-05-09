import { useState, useEffect, useRef } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRedo } from 'react-icons/fa';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const predefinedResponses = {
    'How do I sell my license?': 'You can sell your license by listing it on our platform. Just follow the steps in your dashboard.',
    'What is SoftSell?': 'SoftSell is a platform for buying and selling software licenses securely.',
    'How does the process work?': 'Once you list your license, interested buyers can make offers, and you get paid when the license is transferred.',
    'Is my software license eligible for resale?': 'Most perpetual licenses are eligible for resale. Check with the software provider for specific terms.'
  };

  const sendMessage = (message = input) => {
    if (!message.trim()) return;
    const userMessage = { sender: 'user', text: message };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botReplyText = predefinedResponses[message] || 'This is a mock reply. Try asking something else.';
      const botReply = { sender: 'bot', text: botReplyText };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  const resetChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle"
      >
        {isOpen ? <FaTimes size={20} color="white" /> : <FaComments size={20} color="white" />}
      </button>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h3 style={{ color: 'white' }}>AI Chat</h3>
            <button className="chat-reset-button" onClick={resetChat}>
              <FaRedo size={18} color="white" />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <div className="chat-quick-options">
              {Object.keys(predefinedResponses).map((option, index) => (
                <button key={index} className="chat-option-button" onClick={() => sendMessage(option)}>{option}</button>
              ))}
            </div>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="chat-input"
              style={{ color: 'white', backgroundColor: '#292929', borderColor: '#555' }}
            />
            <button onClick={() => sendMessage()} className="chat-send-button">
              <FaPaperPlane size={18} color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
