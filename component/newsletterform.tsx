import { Button } from "./Button"


export default function NewsletterForm() {
    return (
        <div className="w-full max-w-sm rounded-2xl opacity-50 border p-4 bg-gradient-to-r from-[#379490] to-[#86C4B9] blur-[20%]">
            <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="mb-1 block text-xs text-white">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-md blur-[20%] bg-[#C1E0DB80]/50 px-3 py-2 text-sm text-teal-950 placeholder-white"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-xs text-white">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-md blur-[20%] bg-[#C1E0DB80]/50 px-3 py-2 text-sm placeholder-white outline-none" />
                    </div>
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white">
                        Email Id
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md blur-[20%] bg-[#C1E0DB80]/50 px-3 py-2 text-sm outline-none placeholder-white"
                    />
                </div>

                <Button variant="submit" href="/submit " className="w-full text-black font-extrabold bg-white">Submit</Button>
            </form>
        </div >
    );
}
