import Router from '@/routes';
import { Provider } from 'jotai';

import './index.css';

function App() {
  return (
    <>
      <Provider>
        <h1 className="text-purple-50">workswave</h1>
      </Provider>
      <Router />
    </>
  );
}

export default App;
