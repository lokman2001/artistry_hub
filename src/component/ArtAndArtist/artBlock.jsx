export default function ArtBlock({ artblock }) {
    return (
        <div className=" border-s-2 mx-auto my-5 p-5 w-10/12 bg-yellow-50 ">
            <blockquote className="text-xl p-4 " >
                "
                {artblock}
                "
            </blockquote>
        </div>
    )
}