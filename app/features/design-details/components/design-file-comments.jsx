import AddCommentForm from "@/app/features/design-details/components/add-comment-form";
import Comments from "@/app/features/design-details/components/comments";

export default function DesignFileComments() {
    return (
        <div className="w-full mt-10">
            <div className="border-b border-gray-200 pb-5 mb-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Feedback</h3>
            </div>
            <AddCommentForm />
            <Comments />
        </div>
    )
}
