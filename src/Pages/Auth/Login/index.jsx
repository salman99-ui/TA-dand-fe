import { Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../../../API';
import Logo from '../../../Assets/img/logo.jpeg';
import LogoBg from '../../../Assets/img/logo-bg.jpeg';

function Index() {
  const navigate = useNavigate();
  const handleSubmit = (value) => {
    handleLogin(value);
  };
  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${LogoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="min-h-screen pt-36  flex justify-center items-center h-full">
          <div className="w-4/5 bg-white flex p-10 h-[700px]">
            <div className="flex-1 relative flex items-center">
              <div className="absolute top-0">
                <img alt="" src={Logo} width={100} />
              </div>
              <p className="text-4xl text-[#929292]">
                Bengkel Ahaas <br />
                Nabila
              </p>
            </div>
            <div className="flex-1">
              <div className="w-3/4 px-5 flex items-center justify-center h-full">
                <div className="w-full">
                  <p className="text-xl text-gray-400 text-center">Login</p>
                  <Form onFinish={handleSubmit}>
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
                        className="bg-[#e93030] text-base text-white border-none rounded-md block w-full text-center py-2.5"
                      >
                        Login
                      </button>
                    </div>
                    <div className="my-7 border-x-0 border-t-0 border-b border-solid border-gray-200" />
                    <div className="mt-4">
                      <p className="text-center">
                        Dont have an account ?{' '}
                        <button
                          type="button"
                          className="bg-transparent text-red-400 border-none font-bold cursor-pointer"
                          onClick={() => navigate('/register')}
                        >
                          Sign up here
                        </button>{' '}
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
