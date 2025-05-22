import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


export default function Header({ children }) {

    return (
        <div className=" bg-amber-600 flex py-4 px-28 text-white justify-between sticky top-0 z-10">
            <h1 className="text-2xl w-2/4"><a href="/">Artistry Hub</a></h1>
            <nav className=" text-lg flex justify-evenly w-2/4 items-end">
                <Link className="hover:border-b-2" to="/">Home</Link>
                <Link className="hover:border-b-2" to="/about">About</Link>
                <Link className="hover:border-b-2" to="/art&artist">Arts & Artists</Link>
                <Link className="hover:border-b-2" to="/location">Location</Link>

            </nav>
        </div>
    )
}