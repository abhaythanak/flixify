import { useEffect, useState } from "react";
import Browse from "../Browse/Browse";
import Login from "../Login/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Body() {
    const [screenLoading, setScreenLoading] = useState(false);

    const routes = [
        { path: '/', component: Login },
        { path: '/browse', component: Browse },
    ]

    useEffect(() => {
        setScreenLoading(true);
        setTimeout(() => {
          setScreenLoading(false);
        }, 1300);
      }, []);
    return(
        <>
         <div className=" ">
    {screenLoading ? (
      <h1 className="text-center">Loading.............................</h1>
    ) : (
      
        <BrowserRouter>
        
          <Routes>
          
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          
          
        </BrowserRouter>
    
    )}
    </div>

   
        </>
    )
}
