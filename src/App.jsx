import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './component/header'
import DisplayImg from './component/displayImg'
import WelcomeSection from './component/welcomeSection'
import FeaturedArtworksSection from './component/featuredArtworksSection'
import EventSpace from './component/eventSpace'
import NewsLetterSpace from './component/NewsLetterSpace'
import Event from './component/event'
import News from './component/News'

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

        </div>


      </main>

    </>
  )
}

export default App
