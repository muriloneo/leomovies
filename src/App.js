import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from './components/layout/Splash';

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
