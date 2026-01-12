import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'


import { RouterProvider } from "react-router";
import router from './routes/Routes';
import AuthProvider from './Provider/AuthProvider';




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
