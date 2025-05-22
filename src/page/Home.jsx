import Header from '../component/header'
import DisplayImg from '../component/home/displayImg'
import WelcomeSection from '../component/home/welcomeSection'
import FeaturedArtworksSection from '../component/home/featuredArtworksSection'
import EventSpace from '../component/home/eventSpace'
import NewsLetterSpace from '../component/home/NewsLetterSpace'
import InvitationSpace from '../component/home/InvitationSpace'
import Event from '../component/home/event'
import News from '../component/home/News'
import Invitation from '../component/home/Invitation'
import Footer from '../component/footer'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function Home() {
    const { mode } = useContext(AppContext)
    return (
        <>
            <main>
                <DisplayImg />

                <div className='px-28 '>
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