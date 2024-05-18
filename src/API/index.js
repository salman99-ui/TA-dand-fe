import axios from 'axios';
import { message } from 'antd';

const env = 'http://3.27.135.165:4000';

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

export const handleReservasi = (body, success) => {
  axios.post(`${env}/reservasi`, body).then((response) => {
    success(response.data);
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

export const handleUpdateReservasi = (id, body, success) => {
  axios.post(`${env}/update-reservasi/${id}`, body).then((result) => {
    success();
  });
};

export const handleDetailReservasi = (id, success) => {
  console.log(id);
  axios.get(`${env}/reservasi/${id}`).then((result) => {
    success(result.data.data);
  });
};

export const handleGetTransaksiPayment = (setData) => {
  axios.get(`${env}/total-transaksi/payment`).then((response) => {
    setData(response.data.data);
  });
};

export const handleGetTotalTransaksi = (setData) => {
  axios.get(`${env}/total-transaksi`).then((response) => {
    setData(response.data.data);
  });
};

export const handlePayment = (body, success) => {
  axios.post(`${env}/create-payment`, body).then((result) => {
    success();
  });
};

export const handleUpdateVaPayment = (body, success) => {
  axios.post(`${env}/create-va`, body).then((result) => {
    success();
  });
};

// xendit
export const handleCreateVa = (body, success) => {
  const headers = {
    headers: {
      Authorization:
        'Basic eG5kX2RldmVsb3BtZW50XzZkZFQwTnNFVjBGeU1yaFNUaGJMb3hBSm9HenZjOGNTaHZ1MVJxZHVHZnVxd2NLZGh6Q3JLSng3djZ2YXM6YWJjMTIz',
    },
  };

  axios
    .post(`https://api.xendit.co/callback_virtual_accounts`, body, headers)
    .then((responseXendit) => {
      success(responseXendit);
    });
};
