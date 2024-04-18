import './App.css';p
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Hero from './components/Hero'
import Overview from "./components/Overview";
import MainPageBottomSection from './components/MainPageBottomSection';
import Blog from './components/NormalComponents/Blog';

function App() {
  const router = createBrowserRouter[
    {
      path:"/",
      element: <App/>
    },
    {
      path:"/blog",
      element: <Blog/>
    }
  ]

  return (
    <>
      <Hero/>
      <Overview/>
      <MainPageBottomSection/>

      <RouterProvider router={router}/>
    </>
  )
}

export default App
