export default function EventSpace({ children }) {
    return (
        <div className="my-5">
            <h1 className="text-3xl">Event Invitataion</h1>
            <hr />
            <div className="ps-10">
                {children}
            </div>

        </div>
    )
}