import { useEffect, useState } from "react";

import coursesAPI from "../api/courses-api.js";

export function useGetAllCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await coursesAPI.getAll();

            setCourses(result);
        })();
    }, []);

    return [courses, setCourses];
}

export function useGetOneCourse(courseId) {
    const [course, setCourse] = useState({});

    useEffect(() => {
        (async () => {
            const result = await coursesAPI.getOne(courseId);
            setCourse(result);
        })();
    }, [courseId]);

    return [
        course,
        setCourse
    ];
}

export function useCreateCourse() {
    const courseCreateHandler = (coursesData) => coursesAPI.create(coursesData);

    return courseCreateHandler;
}