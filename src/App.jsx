import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext } from 'react'
import Home from './page/Home'
import About from './page/About'
import ArtAndArtist from './page/ArtAndArtist'
import Header from './component/header'
import Footer from './component/footer'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Data from "./JsonData/Data.json"

export const AppContext = createContext();


function App() {

  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/art&artist", element: <ArtAndArtist /> },
    { path: "/location", element: <Location /> }
  ])


  return (
    <>
      <Header>
      </Header>
      <AppContext.Provider value={{ Data }}>
        <RouterProvider router={router}>
        </RouterProvider>
      </AppContext.Provider>
      <Footer>
      </Footer>
    </>

  )
}

export default App
