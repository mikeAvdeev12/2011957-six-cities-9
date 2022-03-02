import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Auth from '../auth/auth';
import Favorites from '../favorites/favorites';
import RoomProperty from '../room-property/room-property';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  [key: string] : number;
}

function App({rentCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main rentCount={rentCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Auth />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
          <PrivateRoute  authorizationStatus={AuthorizationStatus.noAuth}>
            <Favorites />
          </PrivateRoute>}
        />
        <Route path={AppRoute.Room}>
          <Route
            index
            element={<RoomProperty/>}
          />
          <Route
            path={AppRoute.RoomId}
            element={<RoomProperty/>}
          />
        </Route>
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
