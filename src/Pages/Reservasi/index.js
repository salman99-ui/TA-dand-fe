import { DatePicker, Form, Input } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import { handleReservasi } from '../../API';

function Index() {
  const handleForm = (value) => {
    const dataProfile = JSON.parse(localStorage.getItem('profile')).data.id;
    handleReservasi({
      ...value,
      user_id: dataProfile,
      date: dayjs(value?.date?._d).format('YYYY-MM-DD'),
    });
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
