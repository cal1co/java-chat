import * as React from 'react';
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import Root from './routes/root';
import ChatsComponent from './Components/ChatsComponent';
import CurrentChatComponent from './Components/CurrentChatComponent';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children: [
      {
        path:"rooms/:roomId",
        element:<CurrentChatComponent/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
