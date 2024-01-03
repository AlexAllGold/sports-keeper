import React from 'react';
import { Provider } from 'react-redux';
import Router from './routes/router';
import { setupStore } from '../store/store';

const store = setupStore();

export function App() {
  return (
    <Provider store={store}>
      <div className='h-full bg-[#EAECF0] p-10'>
        <Router />
    </div>
    </Provider>
  );
}

export default App;
