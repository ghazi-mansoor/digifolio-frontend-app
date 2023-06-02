import {ChatBubbleLeftIcon, EyeIcon, HeartIcon} from '@heroicons/react/20/solid'

const files = [
    {
        id: 1,
        title: 'File title',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 2,
        title: 'File title',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 3,
        title: 'File title',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 4,
        title: 'File title',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 5,
        title: 'File title',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 6,
        title: 'File title',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    // More files...
]

export default function DesignFeedGrid() {
    return (
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8">
            {files.map((file) => (
                <li key={file.id} className="relative">
                    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                        <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {file.title}</span>
                        </button>
                    </div>
                    <div className="flex w-full flex-row mt-2 items-center justify-between">
                        <p className="pointer-events-none truncate text-sm font-medium text-gray-900">{file.designer}</p>
                        <div className="flex flex-row space-x-2">
                            <p className="flex flex-row space-x-1 items-center">
                                <ChatBubbleLeftIcon className="h-4 w-4 text-gray-400"/>
                                <span className="pointer-events-none text-sm font-medium text-gray-500">{file.comments}</span>
                            </p>
                            <p className="flex flex-row space-x-1 items-center">
                                <HeartIcon className="h-4 w-4 text-gray-400"/>
                                <span className="pointer-events-none text-sm font-medium text-gray-500">{file.likes}</span>
                            </p>
                            <p className="flex flex-row space-x-1 items-center">
                                <EyeIcon className="h-4 w-4 text-gray-400"/>
                                <span className="pointer-events-none text-sm font-medium text-gray-500">{file.views}</span>
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
