import { useParams } from 'react-router-dom';
import { useGetOneCourse } from '../../hooks/useCourses.js';
import { useForm } from '../../hooks/useForm.js';
import { useGetAllComments, useCreateComment } from '../../hooks/useComments.js';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

const initialValues = {
    comment: ''
};

export default function CourseDetails() {
    const { courseId } = useParams();
    const [comments, dispatch] = useGetAllComments(courseId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [course] = useGetOneCourse(courseId);
    const { isAuthenticated } = useAuthContext();
    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(courseId, comment);

            // setComments(oldComments => [...oldComments, newComment]);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
        } catch (err) {
            console.log(err.message);
        }
    });

    const isOwner = userId == course._ownerId;

    return (
        <section id="course-details">
            <h1>Course Details</h1>
            <div className="info-section">

                <div className="course-header">
                    <img className="course-img" src={course.imageUrl} />
                    <h1>{course.title}</h1>
                    <p className="type">{course.category}</p>
                </div>

                <p className="text">{course.description}</p>

                {/* <!-- Comments Section (visible to all users) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>
                        ))}
                    </ul>
                    {comments.length == 0 && <p className="no-comment">No comments.</p>}
                </div>

                {/* <!-- Edit/Delete buttons (Only for course owner) --> */}
                {isOwner && (
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                )}
            </div>

            {/* <!-- Add Comment Section (only for authenticated users who are not the course owner) --> */}
            {isAuthenticated && !isOwner && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>

                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            )}
        </section>
    );
}