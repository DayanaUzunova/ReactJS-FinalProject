import { Link } from 'react-router-dom';

export default function LatestCourse({
    _id,
    title,
    imageUrl
}) {
    return (
        <div className="course">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={`/courses/${_id}/details`} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}