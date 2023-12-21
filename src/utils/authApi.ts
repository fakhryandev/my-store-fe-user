import User from '../types/User/User';

const authApi = (() => {
  const BASE_URL: string = 'http://localhost:5155/api';

  const login = async (credentials: { username: string; password: string }) => {
    return new Promise<{ data: User }>((resolve, reject) => {
      setTimeout(() => {
        // Simulating successful authentication
        if (
          credentials.username === 'user' &&
          credentials.password === 'password'
        ) {
          resolve({ data: { id: 1, username: 'user' } });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  return {
    login,
  };
})();

export default authApi;
