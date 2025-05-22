import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Data from "./JsonData/Data.json"
import Layout from './layout'
import Contact from './page/Contact'
import Home from './page/Home'
import About from './page/About'
import ArtAndArtist from './page/ArtAndArtist'

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

      <AppContext.Provider value={{ Data }}>
        <RouterProvider router={router} />
      </AppContext.Provider>

    </>

  )
}

export default App
