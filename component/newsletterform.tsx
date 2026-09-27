import { Button } from "./Button"


export default function NewsletterForm() {
    return (
        <div className="w-full max-w-sm rounded-2xl opacity-50 border p-4">
            <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="mb-1 block text-xs text-teal-950/80">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-md bg-white/90 px-3 py-2 text-sm text-teal-950 placeholder-teal-900/40 outline-none focus:ring-2 focus:ring-teal-900/30"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-xs text-teal-950/80">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-md bg-white/90 px-3 py-2 text-sm text-teal-950 placeholder-teal-900/40 outline-none focus:ring-2 focus:ring-teal-900/30"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-1 block text-xs text-teal-950/80">
                        Email Id
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md bg-white/90 px-3 py-2 text-sm text-teal-950 placeholder-teal-900/40 outline-none focus:ring-2 focus:ring-teal-900/30"
                    />
                </div>

                <Button variant="submit" href="/submit " className="w-full">Submit</Button>
            </form>
        </div >
    );
}
