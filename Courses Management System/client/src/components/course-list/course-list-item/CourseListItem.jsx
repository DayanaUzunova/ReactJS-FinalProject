import { Link } from 'react-router-dom';

export default function CourseListItem({
    _id,
    title,
    category,
    imageUrl,
    teacherName
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <h2>{teacherName}</h2>
                <Link to={`/courses/${_id}/details`} className="details-button">Details</Link>
            </div>
        </div>
    );
}