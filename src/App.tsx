import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Show from "./components/Show";

const queryClient = new QueryClient()


function App() {
  return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Show />
        </QueryClientProvider>
      </div>
  );
}

export default App;
