import axios from 'axios';

const ax = axios.create();
ax.interceptors.request.use(
  async (config) => {

    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Headers'] = '*';

    return config;
  },
  (error) => Promise.reject(error)
);


export default ax;
