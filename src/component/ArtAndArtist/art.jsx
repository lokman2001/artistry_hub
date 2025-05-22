export default function Art({ art }) {
    return (
        <div className=" shadow-lg p-2 rounded-xl hover:shadow-sm">

            <img src={art.img} className="w-full block h-10/12 object-cover rounded-xl" alt="" />
            <cite className="px-2 mt-5">{art.title}</cite>

        </div>
    )
}