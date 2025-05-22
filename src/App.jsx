import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './component/header'
import DisplayImg from './component/displayImg'
import WelcomeSection from './component/welcomeSection'
import FeaturedArtworksSection from './component/featuredArtworksSection'
import EventSpace from './component/eventSpace'
import NewsLetterSpace from './component/NewsLetterSpace'
import InvitationSpace from './component/InvitationSpace'
import Event from './component/event'
import News from './component/News'
import Invitation from './component/Invitation'

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
      <Header></Header>
      <main>
        <DisplayImg />
        <div className='px-28'>
          <WelcomeSection />
          <FeaturedArtworksSection />
          <EventSpace>
            <Event />
          </EventSpace>
          <NewsLetterSpace>
            <News />
          </NewsLetterSpace>
          <InvitationSpace>
            <Invitation />
          </InvitationSpace>


        </div>


      </main>

    </>
  )
}

export default App
