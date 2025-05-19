import CoverImg from "../../assets/image/cover-AH.jpg"
export default function DisplayImg() {
    return (
        <div className=" relative">
            <div className=" text-white absolute top-1/3 left-14 align-middle text-9xl">
                Artistry Hub
                <div className="p-5 text-5xl">
                    Art Gallery
                </div>

            </div>
            <img className="w-full" src={CoverImg} alt="" />
        </div>
    )
}