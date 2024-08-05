import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneCourse } from '../../hooks/useCourses';
import coursesAPI from "../../api/courses-api";

const initialValues = {
    title: '',
    category: '',
    imageUrl: '',
    description: '',
}

export default function CourseEdit() {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [course, setCourse] = useGetOneCourse(courseId);
    const { 
        changeHandler,
        submitHandler,
        values
    } = useForm(Object.assign(initialValues, course), async (values) => {
        const updatedCourse = await coursesAPI.update(courseId, values);
        setCourse(updatedCourse);
        navigate(`/courses/${courseId}/details`);
    });


    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Course</h1>
                    <label htmlFor="leg-title">Name:</label>
                    <input onChange={changeHandler} value={values.title} type="text" id="title" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input onChange={changeHandler} value={values.category} type="text" id="category" name="category" />

                    <label htmlFor="course-img">Image:</label>
                    <input onChange={changeHandler} value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="description">Description:</label>
                    <textarea onChange={changeHandler} value={values.description} name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Course" />

                </div>
            </form>
        </section>
    );
}