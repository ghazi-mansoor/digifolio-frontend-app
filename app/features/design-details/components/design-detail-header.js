import { HeartIcon } from '@heroicons/react/20/solid'
export default function DesignDetailsHeader({designer, fileTitle}) {
    return (
        <div className="pb-5">
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h3 className="text-2xl font-bold leading-7 text-gray-900">{fileTitle}</h3>
                    <p className="mt-3 pointer-events-none truncate text-base font-medium text-gray-900">{designer}</p>
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
