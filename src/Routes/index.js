import {
  //
  Page404,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  //
  Dashboard,
  Feedbacks,
  Forms,
  Views,
  Reservasi,
  TransactionUser,
  TransactionAdmin,
  Test,
  ReservasiDetail,
} from '../Pages';

export const getPublicRoutes = () => [
  {
    path: '/login',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Login />,
  },
  {
    path: '/register',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Register />,
  },
  {
    path: '/forgotPassword',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <ForgotPassword />,
  },
  {
    path: '/resetPassword',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <ResetPassword />,
  },
  {
    path: '*',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Page404 />,
  },
];

export const getDashboardRoutes = () => [
  {
    path: '/',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Dashboard />,
  },
  {
    path: '/reservasi',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Reservasi />,
  },
  {
    path: '/reservasi/:id',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <ReservasiDetail />,
  },
  {
    path: '/transaction-history',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <TransactionUser />,
  },
  {
    path: '/transaction-admin',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <TransactionAdmin />,
  },
  {
    path: '/test',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Test />,
  },
  {
    path: '/forms',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Forms />,
  },
  {
    path: '/views',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Views />,
  },
  {
    path: '/feedbacks',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Feedbacks />,
  },
];
