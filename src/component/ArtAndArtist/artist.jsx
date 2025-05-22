import { useState } from "react"

export default function Artist({ artist }) {
    let p = artist.paragraph;
    let [isExpand, setExpand] = useState(false)
    let toggle = () => {
        setExpand(!isExpand)
    }
    return (
        <div className=" shadow-lg p-2 rounded-xl  hover:shadow-sm transition hover:border ">

            <img src={artist.img} className="w-full aspect-square object-cover rounded-xl" alt="" />
            <div className="p-3 ">
                <h1 className="px-2 text-2xl  mt-5">{artist.name}</h1>
                <p>{isExpand ? p : p.substring(0, 100)}<button className="border m-2 px-3 rounded-md" onClick={toggle}>{isExpand ? "see less" : "see more"}</button></p>
            </div>


        </div>
    )
}