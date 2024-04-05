import React from 'react';
import clsx from 'clsx';
import { Layout } from 'antd';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import { useSidebarCollapse } from '../Context';

// Header Items
import DropdownAccount from './Items/DropdownAccount';

const { Header } = Layout;

const HeaderDashboard1 = () => {
  const style = {
    wrapper: clsx(
      'p-3',
      'w-full sticky top-0 z-50',
      'flex justify-end items-center',
      'bg-header-light dark:bg-header-dark shadow',
    ),
  };

  return (
    <Header className={style.wrapper}>
      <div className="flex items-center gap-2">
        {/* <DarkModeToggler /> */}
        {/* <DropdownInternationalization />
        <DropdownNotification /> */}
        <DropdownAccount />
      </div>
    </Header>
  );
};

export default HeaderDashboard1;
