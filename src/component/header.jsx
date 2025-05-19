import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className=" bg-amber-600 flex py-4 px-28 text-white justify-between sticky top-0 z-10">
            <h1 className="text-2xl w-2/4"><a href="">Artistry Hub</a></h1>
            <nav className=" text-lg flex justify-evenly w-2/4 items-end">
                <span className="hover:border-b text-center"><a href="/">Home</a></span>
                <span className="hover:border-b text-center"><a href="/about">About</a></span>
                <span className="hover:border-b text-center"><a href="/art&artist">Art & Artist</a></span>
                <span className="hover:border-b text-center"><a href="/location">Location</a></span>

            </nav>
        </div>
    )
}