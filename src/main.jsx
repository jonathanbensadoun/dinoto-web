import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from '@/components/App/App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from './store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
