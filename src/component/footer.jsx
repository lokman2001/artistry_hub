import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
    return (
        <div className="bg-black text-white">
            <div className=" w-10/12 mx-auto  pt-3 pb-4">
                <div className="flex justify-between">
                    <div className="">
                        <div className="text-2xl mb-3">Artistry Hub</div>
                        <span>Designed by Loqman using ReactJS at May 2025</span>

                    </div>
                    <div className="w-1/2">
                        <nav className="flex  justify-around w-full items-center pb-2 ">
                            <span className="" ><a href="">home</a></span>
                            <span className="" ><a href="">about</a></span>
                            <span className="" ><a href="">art & artist</a></span>
                            <span className="" ><a href="">location</a></span>
                        </nav>

                    </div>
                </div>

            </div>
        </div>

    )
}