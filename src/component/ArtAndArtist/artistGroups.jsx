
export default function ArtistGroups({ children }) {

    return (
        <div className=" my-5 grid grid-cols-3 gap-4 items-start justify-evenly">
            {children}
        </div>
    )
}