import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext } from 'react'
import Layout from './layout'
import Data from "./JsonData/Data.json"
import Home from './page/Home'
import About from './page/About'
import ArtAndArtist from './page/ArtAndArtist'
import Contact from './page/Contact'


export const AppContext = createContext();

function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/art&artist", element: <ArtAndArtist /> },
        { path: "/location", element: <Contact /> }
      ]

    }
  ])


  return (
    <>

      <AppContext value={{ Data }}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext>

    </>
  )
}

export default App
