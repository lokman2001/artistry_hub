export default function Paragraph({ Data }) {
    return (
        <div className="p-5">
            <h1 className=" my-4 text-2xl">{Data.heading}</h1>
            <p>
                {Data.paragraph}
            </p>
        </div>
    )
}