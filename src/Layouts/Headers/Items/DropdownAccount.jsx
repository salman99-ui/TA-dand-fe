import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { ExportOutlined, LogoutOutlined } from '@ant-design/icons';

const DropdownAccount = ({ ...props }) => {
  const profile = localStorage.getItem('profile');
  if (!profile) return null;
  const { nama } = JSON.parse(profile).data;
  const menuAccount = (
    <Menu
      items={[
        {
          danger: true,
          label: (
            <span
              aria-hidden="true"
              onClick={() => {
                localStorage.removeItem('profile');
                window.location.replace('/login');
              }}
            >
              Logout
            </span>
          ),
          icon: <ExportOutlined />,
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menuAccount} trigger={['click']} {...props}>
      <div>
        <div className="flex items-center gap-1 cursor-pointer">
          <Avatar />
          <strong>{nama}</strong>
        </div>
      </div>
    </Dropdown>
  );
};

export default DropdownAccount;
