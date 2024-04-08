import { Form, InputNumber, Modal, Select, Input, message } from 'antd';
import React, { useState } from 'react';
import { handleUpdateReservasi } from '../../API';

const { Option } = Select;

function ModalStatus({ data, handleClose }) {
  const [isDone, setIsDone] = useState(false);
  const handleFinish = (value) => {
    const bodyForm = { ...value };
    let price = 0;
    if (value?.status === 'done') {
      value?.parts?.forEach((item) => {
        price += item.qty * item.price;
      });
    }
    bodyForm.price = price;
    handleUpdateReservasi(data?.id, bodyForm, () => {
      if (isDone) {
        message.success('Data parts berhasil ditambahkan');
      } else {
        message.success('Status berhasil dirubah');
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };
  return (
    <Modal visible footer={null} width={700} onCancel={handleClose}>
      <div>
        <p>Update Status</p>
        <Form onFinish={handleFinish}>
          <div className="mb-2">status</div>
          <Form.Item name="status">
            <Select
              placeholder="Status"
              onChange={(value) => setIsDone(value === 'done')}
            >
              <Option value="process">PROCESS</Option>
              <Option value="done">Done</Option>
            </Select>
          </Form.Item>
          {isDone && (
            <div>
              <div>
                <div className="grid grid-cols-4 border border-solid">
                  <div className="col-span-1 text-center border-y-0 border-l-0 border-r border-solid">
                    Part
                  </div>
                  <div className="col-span-1 text-center border-y-0 border-l-0 border-r border-solid">
                    qty
                  </div>
                  <div className="col-span-1 text-center border-y-0 border-l-0 border-r border-solid">
                    harga
                  </div>
                  <div className="col-span-1 text-center border-y-0 border-l-0 border-r border-solid">
                    Action
                  </div>
                </div>
                <Form.List name="parts" initialValue={[{}]}>
                  {(fields, { add, remove }) => (
                    <div>
                      <div>
                        {fields?.map((field, index) => (
                          <div className="grid grid-cols-4 border border-solid">
                            <div className="col-span-1 border-y-0 border-l-0 border-r border-solid">
                              <Form.Item
                                name={[index, 'part']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Mohon isi nama surveyor',
                                  },
                                ]}
                              >
                                <Input placeholder="Silahkan isi" bordered={false} />
                              </Form.Item>
                            </div>
                            <div className="col-span-1 border-y-0 border-l-0 border-r border-solid">
                              <Form.Item
                                name={[index, 'qty']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Mohon isi nama surveyor',
                                  },
                                ]}
                              >
                                <InputNumber
                                  placeholder="Silahkan isi"
                                  bordered={false}
                                />
                              </Form.Item>
                            </div>
                            <div className="col-span-1 border-y-0 border-l-0 border-r border-solid">
                              <Form.Item
                                name={[index, 'price']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Mohon isi',
                                  },
                                ]}
                              >
                                <InputNumber
                                  placeholder="Silahkan isi"
                                  bordered={false}
                                />
                              </Form.Item>
                            </div>
                            <div className="col-span-1 border-y-0 border-l-0 border-r border-solid">
                              {index !== 0 && (
                                <div className="h-full w-full flex justify-center items-center">
                                  <button
                                    type="button"
                                    onClick={() => remove(field.name)}
                                  >
                                    Hapus
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="bg-transparent cursor-pointer border-none"
                          onClick={() => add()}
                        >
                          <span className="text-xl">+</span> Tambah Data
                        </button>
                      </div>
                    </div>
                  )}
                </Form.List>
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded px-3 py-1.5 border border-solid border-green-400 text-green-400 bg-transparent"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

export default ModalStatus;
