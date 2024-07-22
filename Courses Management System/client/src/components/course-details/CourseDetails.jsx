import { useEffect, useState } from 'react';

import coursesAPI from '../../api/courses-api.js';
import { useParams } from 'react-router-dom';
import commentsApi from '../../api/comments-api.js';

export default function CourseDetails() {
    const [course, setCourse] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { courseId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await coursesAPI.getOne(courseId);
            setCourse(result);
        })();
    }, []);

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(courseId, username, comment);

        // TODO: this should be refactored
        setCourse(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment
            }
        }));

        setUsername('');
        setComment('');
    }

    return (
        <section id="course-details">
            <h1>Course Details</h1>
            <div className="info-section">

                <div className="course-header">
                    <img className="course-img" src={course.imageUrl} />
                    <h1>{course.title}</h1>
                    <p className="type">{course.category}</p>
                </div>

                <p className="text">{course.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {Object.keys(course.comments || {}).length > 0
                            ? Object.values(course.comments).map(comment => (
                                <li key={comment._id} className="comment">
                                    <p>{comment.username}: {comment.text}</p>
                                </li>
                            ))
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>

                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input
                        type="text"
                        placeholder='Pesho'
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    ></textarea>

                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}