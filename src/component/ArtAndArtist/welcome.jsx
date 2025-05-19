
export default function Welcome({ imgs }) {
    return (
        <div className=" grid grid-cols-3 m-auto gap-3 p-4">

            <div className=" row-span-2">
                <img src={imgs.img1} className=" w-full h-76 object-cover rounded-2xl" alt="" />
            </div>
            <div className=" col-span-2">
                <img src={imgs.img2} className=" w-full h-56 object-cover rounded-2xl" alt="" />
            </div>
            <div className=" col-span-1 text-7xl font-extrabold text-center Art_bg bg-clip-text text-transparent">
                <h1>Art & Artist</h1>
            </div>
            <div className="row-span-2">
                <img src={imgs.img3} className="  w-full h-76 object-cover rounded-2xl" alt="" />
            </div>
            <div className="col-span-2">
                <img src={imgs.img4} className=" w-full h-56 object-cover rounded-2xl " alt="" />
            </div>


        </div >

    )
}