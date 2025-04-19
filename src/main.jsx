import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import { CardContext } from './Provider/Context.jsx'
import CardProvider from './Provider/CardProvider.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardProvider>
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster position='button-right'/>
    </CardProvider>
  </StrictMode>,
)
