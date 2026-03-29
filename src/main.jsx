import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, BrowserRouter } from "react-router";
import { RouterProvider } from 'react-router-dom';
import Hammad from './pages/Hammad.jsx';
import Bintang from './pages/Bintang.jsx';

// TAMBAHAN: Import file mahakaryamu
import ProfileRaihan from './pages/Raihan.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Hammad",
    element: <Hammad />,
  },
  {
    path: "/Bintang",
    element: <Bintang />
  },
  // TAMBAHAN: Rute agar profilmu bisa dibuka dari halaman utama
  {
    path: "/Raihan",
    element: <ProfileRaihan />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)