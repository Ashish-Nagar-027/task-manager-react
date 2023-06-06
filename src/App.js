
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import { useState } from 'react';
import { createRoutesFromChildren, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const [user, setUser] = useState(false)

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/'>
        <Route index element={<Login user={user} setUser={setUser} />} />
    
        <Route path='dashboard' element={<Dashboard user={user} setUser={setUser} />}  />
      </Route>
    )
  );


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
