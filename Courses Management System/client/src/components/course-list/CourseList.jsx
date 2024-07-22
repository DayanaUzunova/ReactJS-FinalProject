import { useEffect, useState } from "react";

import * as coursesAPI from "../../api/courses-api.js";

import CourseListItem from "./course-list-item/CourseListItem.jsx";

export default function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await coursesAPI.getAll();

            setCourses(result);
        })();
    }, []);

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