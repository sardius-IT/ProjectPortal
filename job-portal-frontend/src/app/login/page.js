'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Login successful! Welcome, ${data.fullName}`);
      } else if (response.status === 401) {
        setMessage('Invalid email or password.');
      } else {
        setMessage('Something went wrong.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Server error.');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: 400 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <button type="submit" style={{ padding: 10 }}>Login</button>
      </form>
      {message && <p style={{ marginTop: 15 }}>{message}</p>}
    </main>
  );
}


