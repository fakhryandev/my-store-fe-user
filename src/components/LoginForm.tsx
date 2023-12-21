import { useSelector } from 'react-redux';
import RootState from '../types/RootState';
import { useState } from 'react';
import { loginAsync } from '../states/auth/authAction';
import { useAppDispatch } from '../states/store';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    dispatch(loginAsync({ username, password }));
    navigate('/');
  };
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
