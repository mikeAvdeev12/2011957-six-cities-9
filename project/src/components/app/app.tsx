import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Auth from '../auth/auth';
import Favorites from '../favorites/favorites';
import RoomProperty from '../room-property/room-property';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import {OffersArray} from '../../types/offers';

type AppScreenProps = {
  rentCount : number;
  offers: OffersArray;
}

function App({rentCount, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main rentCount={rentCount} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Auth />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomProperty />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
