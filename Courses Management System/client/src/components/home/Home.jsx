import { useEffect, useState } from "react";
import coursesAPI from "../../api/courses-api.js";
import LatestCourse from "./latest-course/LatestCourse.jsx";

export default function Home() {
    const [latestCourses, setLatestCourses] = useState([]);

    useEffect(() => {
        (async () => {
            // TODO: modify to fetch only latest games
            const result = await coursesAPI.getAll();

            setLatestCourses(result.reverse().slice(0, 3));
        })();
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Welcome to our page!</h2>
                <h3>Courses Management System</h3>
                <h2>We are here for you!</h2>
            </div>
            <img src="./images/books.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Courses</h1>
                {latestCourses.length > 0
                    ? latestCourses.map(course => <LatestCourse key={course._id} {...course} />)
                    : <p className="no-articles">No courses yet</p>
                }
            </div>
        </section>
    );
}