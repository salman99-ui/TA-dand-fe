import { Form, InputNumber, Modal, Select, Input } from 'antd';
import React from 'react';

const { Option } = Select;

function ModalStatus() {
  return (
    <Modal visible footer={null} width={700}>
      <div>
        <p>Update Status</p>
        <Form>
          <div>status</div>
          <Form.Item>
            <Select>
              <Option>PROCESS</Option>
              <Option>Done</Option>
            </Select>
          </Form.Item>
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
            <Form.List name="items" initialValue={[{}]}>
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
                            <InputNumber placeholder="Silahkan isi" bordered={false} />
                          </Form.Item>
                        </div>
                        <div className="col-span-1 border-y-0 border-l-0 border-r border-solid">
                          <Form.Item
                            name={[index, 'harga']}
                            rules={[
                              {
                                required: true,
                                message: 'Mohon isi nama surveyor',
                              },
                            ]}
                          >
                            <InputNumber placeholder="Silahkan isi" bordered={false} />
                          </Form.Item>
                        </div>
                        <div className="col-span-1 border-y-0 border-l-0 border-r border-solid">
                          <div className="h-full w-full flex justify-center items-center">
                            <button type="button" onClick={() => remove(field.name)}>
                              Hapus
                            </button>
                          </div>
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
        </Form>
      </div>
    </Modal>
  );
}

export default ModalStatus;
