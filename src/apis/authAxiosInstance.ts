import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

authAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errStatus = error.response.status;
    console.log('에러 발생', errStatus);

    switch (errStatus) {
      case 400:
        alert(error.response.data);
        break;

      case 404:
        alert(error.response.data);
        break;

      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default authAxiosInstance;
