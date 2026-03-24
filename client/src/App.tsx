import { MenuCreate } from "./components/admin/menuForm"
import { MenuPage } from "./pages/menuPage"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import "./App.css"
import { Navbar } from "./components/layout/navebar"

function RootLayout() {
  return (
    
    <div className="min-h-screen">
      <Navbar />
  
      <Outlet />           
        <footer>
       
      </footer>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  
    children: [
      {
        index: true,              
        element: <MenuPage />,
      },
      
      {
        path: 'create/menu',
        element: <MenuCreate />,
      },
  
    ],
  },
])
function App() {
  

  
 return <RouterProvider router={router} />
  
}

export default App
