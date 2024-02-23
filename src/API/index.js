import axios from 'axios';
import { message } from 'antd';

const env = 'http://localhost:4000';

export const handleLogin = (body) => {
  axios.post(`${env}/login`, body).then((response) => {
    localStorage.setItem('profile', JSON.stringify(response.data));
    window.location.href = '/';
  });
};

export const handleRegister = (body) => {
  axios.post(`${env}/create-user`, body).then((response) => {
    message.success('User berhasil di buat');
    window.location.href = '/login';
  });
};

export const handleProfile = (id, setData) => {
  axios.get(`${env}/profile/${id}`).then((response) => {
    setData(response.data.data[0]);
  });
};

export const handleReservasi = (body) => {
  axios.post(`${env}/reservasi`, body).then((response) => {
    console.log('OK');
  });
};

export const handleHistoryReservasi = (id, setData) => {
  axios.get(`${env}/transaction-history/${id}`).then((response) => {
    setData(response.data.data);
  });
};

export const handleHistoryReservasiAdmin = (setData) => {
  axios.get(`${env}/transaction-history`).then((response) => {
    setData(response.data.data);
  });
};
