import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getDashboardRoutes, getPublicRoutes } from './Routes';
import { DashboardLayout1 } from './Layouts';
import PrivateRoute from './Routes/privateRoute';

const publicRoutes = getPublicRoutes();
const dashboardRoutes = getDashboardRoutes();

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout1 />}>
        {dashboardRoutes.map(
          (route) =>
            !route.isDisabled && (
              <Route
                key={route.path}
                index={route.isIndex}
                caseSensitive={route.isCaseSensitive}
                path={route.path}
                element={<PrivateRoute>{route.element}</PrivateRoute>}
              />
            ),
        )}
      </Route>
      {/* === Public Route === */}
      {publicRoutes.map(
        (route) =>
          !route.isDisabled && (
            <Route
              key={route.path}
              index={route.isIndex}
              caseSensitive={route.isCaseSensitive}
              path={route.path}
              element={route.element}
            />
          ),
      )}
    </Routes>
  </BrowserRouter>
);

export default App;
