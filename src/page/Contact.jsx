import { useContext } from "react"
import Subtitle from "../component/Contact/subtile"
import { AppContext } from "../App"
import Form from "../component/Contact/form"
import Location from "../component/Contact/location"
import Address from "../component/Contact/address"
import Short from "../component/Contact/short"

export default function Contact() {
    const { Data } = useContext(AppContext)

    let data = Data.pages.contact
    let title = data.subtitle

    return (
        <div>
            <div className=" m-0  py-5">
                <div className="w-10/12 mx-auto text-black">
                    <div className=" ">
                        <h1 className="text-4xl font-bold mb-4">Contact</h1>
                        <Subtitle title={title} />
                    </div>
                    <div className="p-4  ">
                        <Form />
                    </div>
                    <div className="col-span-2 grid grid-cols-2 my-4 " >
                        <h1 className="text-xl mb-2 border-b col-span-2">Location & Address</h1>
                        <Location></Location>
                        <Address></Address>
                    </div>
                    <div>
                        <Short></Short>
                    </div>

                </div>

            </div>

        </div>
    )
}