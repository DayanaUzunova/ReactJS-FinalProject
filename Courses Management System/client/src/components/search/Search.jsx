import { useState } from 'react';
import CourseListItem from '../course-list/course-list-item/CourseListItem.jsx';
import { useGetAllCourses } from "../../hooks/useCourses.js";

export default function CourseList() {
    const [courses] = useGetAllCourses();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="catalog-page">
            <h1>Search Page</h1>
            <input 
                type="text" 
                placeholder="Search courses" 
                value={searchTerm} 
                onChange={handleSearch} 
            />
            {searchTerm === "" 
                ? <h3 className="no-articles">Please enter a course name.</h3>
                : filteredCourses.length > 0
                    ? filteredCourses.map(course => <CourseListItem key={course._id} {...course} />)
                    : <h3 className="no-articles">No courses found</h3>
            }
        </section>
    );
}