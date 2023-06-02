import Comment from "@/app/features/design-details/components/comment";

const comments = [
    {
        id: 1,
        author: 'John Doe',
        text: 'Amazing work!'
    },
    {
        id: 2,
        author: 'John Doe',
        text: 'Great work!'
    }
];

export default function Comments() {
    return (
        <ul className="flex flex-col mt-8 space-y-5">
            {
                comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <Comment comment={comment} />
                        </li>
                    )
                })
            }
        </ul>
    );
}
