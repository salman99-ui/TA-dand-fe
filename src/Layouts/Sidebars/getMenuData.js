import { DashboardOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const getMenuData = () => [
  {
    key: '/',
    title: 'Dashboard',
    label: <NavLink to="/">Dashboard</NavLink>,
    icon: <DashboardOutlined />,
    hidden: false,
    disabled: false,
  },
];

export default getMenuData;
