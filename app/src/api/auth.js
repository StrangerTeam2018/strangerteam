import axios from 'axios';

export default {
  async login(user, password) {
    try {
      const response = await axios.post ('/api/auth/login', { user : user, password : password });
      return (response.data.status === 'ok');
    }
    catch(e) {
      return false;
    }
  },

  async logout() {
    try {
      const response = await axios.get ('/api/auth/logout');
      return (response.data.status === 'ok');
    }
    catch(e) {
      return false;
    }
  }
}