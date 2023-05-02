import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material";
import {theme} from "./styles/theme"
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
