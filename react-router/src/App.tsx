
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './routes/home';
import InspirationPage from './routes/inspiration';
import Login from './routes/login';
import Signup from './routes/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/inspiration",
    element: <InspirationPage />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
