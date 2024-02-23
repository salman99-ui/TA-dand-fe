import { Form, Input } from 'antd';
import React from 'react';
import { handleRegister } from '../../../API';

function Index() {
  const handleSubmit = (value) => {
    handleRegister(value);
  };
  return (
    <div className="min-h-screen">
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          <div className="flex-1 border-x-0 border-t-0 border-b-0 border-r border-solid border-[#1E1E1E]">
            <div className="flex items-center h-full pl-6">
              <p className="m-0 text-5xl font-bold">Bengkel Ahass Nabila</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="px-5 flex items-center justify-center h-full">
              <div className="w-2/3">
                <Form onFinish={handleSubmit}>
                  <Form.Item
                    name="nama"
                    rules={[
                      {
                        required: true,
                        message: 'Silahkan isi nama',
                      },
                    ]}
                  >
                    <Input placeholder="Name" size="large" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Silahkan isi email',
                      },
                    ]}
                  >
                    <Input placeholder="email" size="large" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Silahkan isi email',
                      },
                    ]}
                  >
                    <Input.Password placeholder="password" size="large" />
                  </Form.Item>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="bg-[#1E1E1E] text-base text-white border-none rounded-md block w-full text-center py-2.5"
                    >
                      Create Account
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
