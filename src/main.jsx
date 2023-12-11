import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Store/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AuthLayout from './componets/AuthLayout.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import LoginConp from './pages/LoginConp.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Login",
        element:(

            <LoginConp/>
          
        )
      },
      {
        path:"/signup",
        element:(
         
            <SignUpPage />
        )
      },
      {
        path:"/all-post",
        element:(
         
            <AllPost />
          
        )
      },
      {
        path:"/add-post",
        element:(
          
            <AddPost />
          
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
         
            <EditPost/>
        )
      },
      {
        path:"/post/:slug",
        element:<Post />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>,
  </Provider>
 
)
