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
import Footer from './component/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {

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
        <Footer></Footer>
        <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>

      </main>

    </>
  )
}

export default App
