import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderDashboard1 } from './Headers';
import { SidebarDashboard1 } from './Sidebars';
import LayoutProvider from './Context';

const { Content } = Layout;

const InnerLayout = () => (
  <Layout>
    <Content>
      <HeaderDashboard1 />
      <div className="p-5">
        <Outlet />
      </div>
    </Content>
  </Layout>
);

const DashboardLayout1 = () => (
  <LayoutProvider>
    <SidebarDashboard1 />
    <InnerLayout />
  </LayoutProvider>
);

export default DashboardLayout1;
