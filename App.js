
import React from 'react';

import Routes from './src/routes';
import DataProvider from './src/components/context/dataContext';



export default function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
