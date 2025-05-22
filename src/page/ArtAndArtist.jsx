import Welcome from "../component/ArtAndArtist/welcome"
import ArtGroups from "../component/ArtAndArtist/artGroups"
import ArtTypeLabel from "../component/ArtAndArtist/artTypeLabel";
import { useContext } from "react"
import { AppContext } from "../App";
import Art from "../component/ArtAndArtist/art";
import ArtSpace from "../component/ArtAndArtist/artSpace";
import ArtBlock from "../component/ArtAndArtist/artBlock";
import ArtCard from "../component/ArtAndArtist/artCard";
import ArtistSpace from "../component/ArtAndArtist/artistsSpace";
import ArtistGroups from "../component/ArtAndArtist/artistGroups";
import Artist from "../component/ArtAndArtist/artist";

export default function ArtAndArtist() {

    const { Data } = useContext(AppContext);

    let data = Data.pages.artandartist
    let design = data.design
    let arts = data.arts;
    let artblock = data.artblock
    let artists = data.artists;

    return (
        <>
            <Welcome imgs={design}></Welcome>
            <ArtBlock artblock={artblock} />
            <ArtSpace>
                <h1 className="text-3xl border-b-2 font-bold">The Arts </h1>
                {arts.map((art) => {
                    let imgdata = art.art
                    return (
                        <ArtGroups>
                            <ArtTypeLabel label={art.type} />
                            <ArtCard>
                                {art.art.map((art) => {
                                    return (
                                        <Art art={art} />
                                    )

                                })}
                            </ArtCard>
                        </ArtGroups>
                    )
                })}

            </ArtSpace>
            <ArtistSpace>
                <h1 className="text-3xl border-b-2 font-bold">Our Famous Artist </h1>
                <ArtistGroups>
                    {
                        artists.map((artist) => {
                            return (
                                <Artist artist={artist} />
                            )

                        })
                    }
                </ArtistGroups>
            </ArtistSpace>

        </>
    )
}