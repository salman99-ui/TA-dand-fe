import { Form, Modal, Select, message } from 'antd';
import React from 'react';
import { handleCreateVa, handlePayment, handleUpdateVaPayment } from '../../API';

const { Option } = Select;

const BankList = [
  {
    name: 'Bank Central Asia (BCA)',
    code: 'BCA',
  },
  {
    name: 'Bank CIMB (CIMB)',
    code: 'CIMB',
  },
  {
    name: 'Bank Mandiri',
    code: 'MANDIRI',
  },
  {
    name: 'Bank Negara Indonesia (BNI)',
    code: 'BNI',
  },
  {
    name: 'Bank Rakyat Indonesia (BRI)',
    code: 'BRI',
  },
  {
    name: 'Bank Syariah Indonesia (BSI)',
    code: 'BSI',
  },
];

function ModalCreatePayment({ id, amount, detail, handleClose }) {
  const handleForm = (value) => {
    const externalId = `va-${value.bank_code}-${Math.ceil(Math.random() * 100)}`;
    const bodyForm = {};
    const date = new Date();
    date.setDate(date.getDate() + 1);
    bodyForm.id_payment = id;
    bodyForm.external_id = externalId;
    bodyForm.is_closed = true;
    bodyForm.expected_amount = amount;
    bodyForm.name = detail?.nama;
    bodyForm.bank_code = value?.bank_code;
    bodyForm.externalId = externalId;
    bodyForm.expiration_date = date;

    handlePayment(bodyForm, () => {
      handleCreateVa(bodyForm, (response) => {
        handleUpdateVaPayment({ ...response.data, id_payment: id }, () => {
          message.success(
            'Berhasil generate pembayaran,silahkan bayar menggunakan VA tersedia',
          );
        });
      });
    });
  };

  return (
    <Modal visible width={500} footer={null} onCancel={handleClose}>
      <Form onFinish={handleForm} layout="vertical">
        <Form.Item label="Pilih Bank VA" name="bank_code">
          <Select>
            {BankList.map((item) => (
              <Option value={item.code}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <button type="submit">Submit</button>
      </Form>
    </Modal>
  );
}

export default ModalCreatePayment;
