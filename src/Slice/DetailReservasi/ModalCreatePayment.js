import { Form, Modal, Select, message } from 'antd';
import React from 'react';
import { handleCreateVa, handlePayment, handleUpdateVaPayment } from '../../API';

const { Option } = Select;

const BankList = [
  {
    name: 'Bank Central Asia (BCA)',
    code: 'bca',
  },
  {
    name: 'Bank CIMB (CIMB)',
    code: 'cimb',
  },
  {
    name: 'Bank Mandiri',
    code: 'mandiri',
  },
  {
    name: 'Bank Negara Indonesia (BNI)',
    code: 'bni',
  },
  {
    name: 'Bank Rakyat Indonesia (BRI)',
    code: 'bri',
  },
  {
    name: 'Bank Syariah Indonesia (BSI)',
    code: 'bsi',
  },
];

function ModalCreatePayment({ id, amount, detail, handleClose }) {
  const handleForm = (value) => {
    console.log(value);
    const externalId = `va-${value.bank_code}-${Math.ceil(Math.random() * 1000)}`;
    const bodyForm = {};
    const date = new Date();
    date.setDate(date.getDate() + 1);
    // bodyForm.id_payment = id;
    // bodyForm.external_id = externalId;
    // bodyForm.is_closed = true;
    // bodyForm.expected_amount = amount;
    // bodyForm.name = detail?.nama;
    // bodyForm.bank_code = value?.bank_code;
    // bodyForm.externalId = externalId;
    // bodyForm.expiration_date = date;

    bodyForm.name = detail?.nama;
    bodyForm.phone = '08126154448';
    bodyForm.amount = amount;
    bodyForm.email = detail?.email;
    bodyForm.notifyUrl = 'https://mywebsite.com';
    bodyForm.expired = '24';
    bodyForm.expiredType = 'hours';
    bodyForm.comments = 'Catatan';
    bodyForm.referenceId = externalId;
    bodyForm.paymentMethod = 'va';
    bodyForm.paymentChannel = value?.bank_code;
    bodyForm.feeDirection = 'BUYER';
    bodyForm.external_id = externalId;
    bodyForm.id = id;

    handlePayment(bodyForm, () => {
      handleCreateVa(bodyForm, (response) => {
        message.success(
          'Berhasil generate pembayaran,silahkan bayar menggunakan VA tersedia',
        );
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
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
