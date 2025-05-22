import { useContext } from "react"
import { AppContext } from "../App"
import Paragraph from "../component/paragraph"

export default function About() {
    const { Data } = useContext(AppContext)

    let history = Data.pages.about.history
    let mission = Data.pages.about.mission

    return (
        <div className="  py-6">
            <div className=" w-3/4  m-auto p-6 border-s-2">
                <div>
                    <h1 className=" text-4xl ">
                        About Us
                    </h1>
                    <div>
                        {history.map((p) => <Paragraph Data={p} />)}
                    </div>
                    <div>
                        {mission.map((p) => <Paragraph Data={p} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}