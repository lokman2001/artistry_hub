import Welcome from "../component/ArtAndArtist/welcome"
import ArtSpace from "../component/ArtAndArtist/artSpace"
import { useContext } from "react"
import { AppContext } from "../App";

export default function ArtAndArtist() {

    const { Data } = useContext(AppContext);

    let design = Data.pages.artandartist.design

    return (
        <>
            <Welcome imgs={design}></Welcome>
            <div className="px-28">
                <ArtSpace />
            </div>


        </>
    )
}