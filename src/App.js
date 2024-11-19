import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Work from "./pages/Work"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Header/><Home/></>
    },
    {
      path:"/About",
      element:<><Header/><About/></>
    },
    {
      path:"/Contact",
      element:<><Header/><Contact/></>
    },
    {
      path:"/Service",
      element:<><Header/><Service/></>
    },
    {
      path:"/Work",
      element:<><Header/><Work/></>
    },
  ])
  return (
    <div>
     
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App

