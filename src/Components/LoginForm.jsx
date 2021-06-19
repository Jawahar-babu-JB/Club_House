import { useState } from 'react';
import axios from 'axios';

const projectID = '370f8736-e4ac-4b5d-ba1d-5b8a24bb53bb';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError(<h4>Oops, invalid credentials</h4>);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Club House</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
        <h3 className="author">
          Developed by{' '}
          <a
            href="https://www.linkedin.com/in/jawahar-babu/"
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '20px',
              fontWeight: '2px',
              letterSpacing: '2px',
            }}
            target="_blank"
            className="authorName"
          >
            Jawahar Babu
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Modal;
