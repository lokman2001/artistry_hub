export default function FeaturedArtworksSection() {
    return (
        <>
            <div className="my-5 flex flex-wrap">
                <div className="text-9xl self-center w-2/3">
                    Featured Artworks
                </div>
                <img className="w-1/3 hover:shadow-xl" src="https://cdn.tatlerasia.com/asiatatler/i/sg/2018/11/05114419-lapyae_cover_1132x1500.jpg" alt="" />

                <img className="w-2/3 hover:shadow-xl" src="https://cdn.tatlerasia.com/asiatatler/i/sg/2018/11/05114420-ngwe-phyoe_cover_1500x1115.jpg" alt="" />

                <div className="text-3xl w-1/3 self-center text-center">
                    "Inspiring Minds, One Canvas at a Time."
                    <div className="mt-3">
                        <a className=" border rounded-md px-4 py-3 text-xl hover:shadow-xl">See More</a>
                    </div>

                </div>
            </div>
        </>
    )
}