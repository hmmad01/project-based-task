import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Hammad from './pages/Hammad.jsx';
import Bintang from './pages/Bintang.jsx';
import ProfilNathanael from './pages/Nathan.jsx'; // Nama import kamu

// TAMBAHAN: Import file mahakaryamu
import ProfileRaihan from './pages/Raihan.jsx';

const router = createBrowserRouter([
  // 1. TAMBAHKAN RUTE INI AGAR HALAMAN UTAMA (APP.JSX) MUNCUL
  {
    path: "/",
    element: <App />, 
  },
  
  // 2. RUTE UNTUK PROFILMU
  {
    path: "/Nathan", // Saya sesuaikan jadi /Nathan agar sama dengan username di App.jsx
    element: <ProfilNathanael />, // Pakai nama komponen yang sudah di-import
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