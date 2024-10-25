import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/app/App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import './style/rootStyles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
