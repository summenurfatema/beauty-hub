import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Roots';

function App() {

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
