import { Link } from 'react-router-dom';

export default function CourseListItem({
    _id,
    title,
    category,
    imageUrl
}) {
    return (
        <div className="allCourses">
            <div className="allCourses-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/courses/${_id}/details`} className="details-button">Details</Link>
            </div>
        </div>
    );
}