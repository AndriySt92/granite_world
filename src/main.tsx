import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ModalProvider } from './contexts/ModalProvider.tsx';
import App from './App.tsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ModalProvider>
      <App />
    </ModalProvider>
  </BrowserRouter>,
);
