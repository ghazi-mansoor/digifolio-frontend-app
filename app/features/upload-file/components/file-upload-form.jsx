import {ArrowUpOnSquareStackIcon} from "@heroicons/react/24/outline";

export default function FileUploadForm() {
    return (
        <div className="bg-slate-900 rounded-md grid mx-auto max-w-7xl w-full grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
                <h2 className="text-base font-semibold leading-7 text-white">Design File</h2>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                    Time to showcase your creativity :)
                </p>
            </div>

            <form className="md:col-span-2">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full flex items-center gap-x-8">
                        <div className="">
                            <ArrowUpOnSquareStackIcon className="h-20 w-20 text-gray-600" />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                            >
                                Upload File
                            </button>
                            <p className="mt-2 text-xs leading-5 text-gray-400">JPG or PNG. 10MB max.</p>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                rows={4}
                                name="description"
                                id="description"
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex">
                    <a
                        href="/design-feed"
                        className="mr-3 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                    >
                        Cancel
                    </a>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
}
