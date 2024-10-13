import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <div className="font-pretendard bg-light-gray min-h-screen">
        <App />
      </div>
    </Theme>
  </StrictMode>
);
