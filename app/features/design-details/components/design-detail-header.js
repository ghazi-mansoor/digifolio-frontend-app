import { HeartIcon } from '@heroicons/react/20/solid'
export default function DesignDetailsHeader() {
    return (
        <div className="pb-5">
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h3 className="text-2xl font-bold leading-7 text-gray-900">Mobile App Design: Fitness App</h3>

                </div>
                <button
                    type="button"
                    className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <HeartIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Like
                </button>
            </div>
        </div>
    );
}
