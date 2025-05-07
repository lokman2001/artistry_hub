
export default function ({ children }) {
    return (
        <div className="my-5">
            <h1 className="text-3xl">News Letters</h1>
            <hr />
            <div className="ps-10">
                {
                    children
                }
            </div>

        </div>
    )
}