import { DatePicker, Form, Input, message } from 'antd';
import { Buffer } from 'buffer';
import React from 'react';
import dayjs from 'dayjs';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleReservasi } from '../../API';

const env = 'http://localhost:4000';

function Index() {
  const navigate = useNavigate();

  const handleForm = (value) => {
    const dataProfile = JSON.parse(localStorage.getItem('profile')).data.id;
    // const headers = {
    //   headers: {
    //     Authorization:
    //       'Basic eG5kX2RldmVsb3BtZW50X2ZjZ1hnMEV3dzlFcXZqbzBBNGJmQm1BMEVTQlpRYW9JQ1RYQWttM0wzbjVnWlJja3pXRDFnRldLaWE5VW5oOg==',
    //   },
    // };

    // create virtual account
    // axios
    //   .post(
    //     `https://api.xendit.co/callback_virtual_accounts`,
    //     {
    //       external_id: 'va-1475804036622',
    //       bank_code: 'BRI',
    //       name: 'Michael Chen',
    //       is_closed: true,
    //       expected_amount: 50000,
    //       expiration_date: '2024-03-18T17:00:00.000Z',
    //     },
    //     headers,
    //   )
    //   .then((responseXendit) => {
    //     console.log(responseXendit.data);
    //   });

    // simulate payment
    // axios
    //   .post(
    //     `https://api.xendit.co/callback_virtual_accounts/external_id=va-1475804036622/simulate_payment`,
    //     {
    //       amount: 50000,
    //     },
    //     headers,
    //   )
    //   .then((responseXendit) => {
    //     console.log(responseXendit.data);
    //   });

    handleReservasi(
      {
        ...value,
        user_id: dataProfile,
        date: dayjs(value?.date?._d).format('YYYY-MM-DD'),
      },
      (valueSuccess) => {
        message.success('Reservasi berhasil dilakukan');
        navigate(`/reservasi/${valueSuccess?.id}`);
      },
    );
  };
  return (
    <div>
      <div className="bg-[#696F79] pl-7 py-4">
        <span className="text-xl font-semibold">Reservasi Servis</span>
      </div>
      <div className="mt-4">
        <p className="text-xl font-semibold text-black mb-4">Informasi Data Diri</p>
        <div className="">
          <Form layout="vertical" onFinish={handleForm}>
            <Form.Item
              name="nama"
              label="Nama"
              rules={[{ required: true, message: 'silahkan isi nama' }]}
            >
              <Input size="large" placeholder="Nama Lengkap" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'silahkan isi email' }]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item
              name="hp"
              label="No Handphone"
              rules={[{ required: true, message: 'silahkan isi no hp' }]}
            >
              <Input size="large" placeholder="0892151212" />
            </Form.Item>
            <Form.Item
              name="alamat"
              label="Alamat"
              rules={[{ required: true, message: 'silahkan isi alamat' }]}
            >
              <Input size="large" placeholder="Alamat Lengkap" />
            </Form.Item>
            <div className="mb-3">
              <p className="text-black font-semibold text-xl m-0">
                Pilih Waktu kedatangan
              </p>
            </div>
            <Form.Item
              name="date"
              label="Tanggal"
              rules={[{ required: true, message: 'silahkan isi alamat' }]}
            >
              <DatePicker format="DD-MM-YYYYY" />
            </Form.Item>
            <div className="flex justify-end gap-3 w-full">
              <button
                type="button"
                className="px-5 py-2 rounded-md bg-transparent border border-solid border-black text-black"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-black border border-solid border-black text-center text-white"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Index;
