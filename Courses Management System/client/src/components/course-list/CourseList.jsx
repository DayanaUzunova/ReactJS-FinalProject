import CourseListItem from "./course-list-item/CourseListItem.jsx";
import { useGetAllCourses } from "../../hooks/useCourses.js";

export default function CourseList() {
    const [courses] = useGetAllCourses();

    return (
        <section id="catalog-page">
            <h1>All Courses</h1>
            {courses.length > 0
                ? courses.map(course => <CourseListItem key={course._id} {...course} />)
                : <h3 className="no-articles">No courses yet</h3>
            }
        </section>
    );
}