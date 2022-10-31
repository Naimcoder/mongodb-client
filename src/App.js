import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CreateUser from './Components/CreateUser';
import Home from './Components/Home';
import UpdateUser from './Components/UpdateUser';
import Main from './Layout/Main';
function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {path:'/',
        element:<Home></Home>,
        },

        {path:'/home',
        element:<Home></Home>,
        loader: ()=>fetch('http://localhost:5000/users')
       },

        
       {path:'/createuser',
        element:<CreateUser></CreateUser>
        },

        {path:'/updateuser/:id',
        element:<UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
