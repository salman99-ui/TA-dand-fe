import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useSidebarCollapse } from '../Context';
import getMenuData from './getMenuData';

// Assets
import Logo from '../../Assets/SVG/logo.svg';
import LogoWord from '../../Assets/SVG/logoWord.svg';
import { handleProfile } from '../../API';

const { Sider } = Layout;

const menuData = getMenuData();

const SidebarDashboard1 = () => {
  const location = useLocation();
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useSidebarCollapse();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const dataProfile = localStorage.getItem('profile');
    if (dataProfile) {
      const dataId = JSON.parse(localStorage.getItem('profile')).data.id;
      handleProfile(dataId, setProfile);
    }
  }, []);
  return (
    profile &&
    profile?.role === 1 && (
      <Sider
        breakpoint="md"
        onBreakpoint={(isBroken) =>
          isBroken ? setIsSidebarCollapsed(true) : setIsSidebarCollapsed(false)
        }
        collapsed={isSidebarCollapsed}
        collapsible
        trigger={null}
      >
        <div className="sticky top-0">
          <Menu
            className="h-full max-h-screen overflow-y-scroll overflow-x-hidden hide-scrollbar"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={menuData.filter((item) => !item.hidden)}
          />
        </div>
      </Sider>
    )
  );
};

export default SidebarDashboard1;
