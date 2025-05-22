export default function Form() {
    return (
        <form className=" p-5 my-4   border rounded-xl " id="Form">
            <h1 className="text-2xl border-b mb-5">Contact Box</h1>
            <div className="grid grid-cols-3 gap-3">
                <div >
                    <label htmlFor="name" className=" mx-3 block">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className=" my-2 border p-2 rounded-xl w-full" />
                </div>

                <div>
                    <label htmlFor="purpose" className=" mx-3 block">Purpose</label>
                    <select name="purpose" id="purpose" className=" my-2 border p-2 rounded-xl w-full">
                        <option className=" text-black" value="Suggestion">Suggestion Box</option>
                        <option className=" text-black" value="Request">Request for join</option>
                        <option className=" text-black" value="Report">Report Box</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className=" mx-3 block">Message</label>
                    <input type="text" name="message" id="message" placeholder="Message" className=" my-2 border p-2 rounded-xl w-full" />
                </div>

            </div>



            <button type="submit" className=" my-4 border p-2 rounded-xl w-full">Send Messages</button>

        </form>
    )
}