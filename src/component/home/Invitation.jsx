import { Link } from "react-router-dom"
export default function Invitation() {
    return (
        <div className="mt-5 mb-10">
            <p className="text-xl pb-4">
                At Artistry Hub, we give your artwork global exposure, connecting you with art lovers and collectors worldwide. Our active social media promotion, with an engagement rate 25% higher than the industry average, ensures your art reaches a larger audience. You’ll be part of a curated collection that showcases your work alongside other talented artists, while also joining a supportive community where you can network and grow. Ready to take your art to the next level? Join us today!
            </p>

            <div className="my-5">
                <Link to="location" className="border rounded px-5 py-3 text-lg ">Join Now</Link>

            </div>


        </div >

    )
}