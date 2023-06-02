import {UserCircleIcon} from "@heroicons/react/24/outline";

export default function Comment({ comment }) {
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                <UserCircleIcon className="h-10 w-10 text-gray-400" />
            </div>
            <div className="min-w-0 flex-1 rounded-md shadow-sm px-5 py-4 text-base text-gray-900 bg-slate-50">
                { comment.text }
            </div>
        </div>
    );
}
