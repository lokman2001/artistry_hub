export default function InvitationSpace({ children }) {
    return (
        <div className="my-6">
            <h1 className="text-2xl">Why Should You Join Us at Artistry Hub?</h1>
            <hr />
            <div className="ps-10">
                {children}
            </div>

        </div>
    )
}