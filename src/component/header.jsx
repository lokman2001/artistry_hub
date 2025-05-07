export default function Header() {
    return (
        <div className=" bg-amber-900 flex py-4 px-28 text-white justify-between sticky top-0 z-10">
            <h1 className="text-2xl w-2/4"><a href="">Artistry Hub</a></h1>
            <nav className=" text-lg flex justify-evenly w-2/4 items-end">
                <span className="hover:border-b text-center"><a href="">home</a></span>
                <span className="hover:border-b text-center" ><a href="">about</a></span>
                <span className="hover:border-b text-center" ><a href="">art & artist</a></span>
                <span className="hover:border-b text-center" ><a href="">location</a></span>
            </nav>
        </div>
    )
}