import CourseListItem from "./course-list-item/CourseListItem.jsx";
import { useGetAllCourses } from "../../hooks/useCourses.js";

export default function CourseList() {
    const [courses] = useGetAllCourses();

    return (
        <div className="page-container">
            <section id="catalog-page">
                <h1>All Courses</h1>
                {courses.length > 0 
                    ? (
                        <>
                            <h2>These are all the courses that have been uploaded to our site!</h2>
                            <h2>We hope at least one of them impresses you!</h2>
                            {courses.map(course => <CourseListItem key={course._id} {...course} />)}
                        </>
                    ) : (
                        <h3 className="no-articles">No courses yet</h3>
                    )
                }
            </section>
        </div>
    );
}