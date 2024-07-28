import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";
import { useCreateCourse } from "../../hooks/useCourses";

const initialValues = {
    title: '',
    category: '',
    imageUrl: '',
    description: ''
}

export default function CourseCreate() {
    const navigate = useNavigate();
    const createCourse = useCreateCourse();

    const createHandler = async (values) => {
        try{
            const { _id: courseId } = await createCourse(values);

            navigate(`/courses/${courseId}/details`);
        }
        catch (err) {
            //TODO Set error state and display error
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);
    
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Course</h1>
                    <label className="inputs" htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} placeholder="Enter course name..." />

                    <label className="inputs" htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={changeHandler} placeholder="Enter course category..." />

                    <label className="inputs" htmlFor="course-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Upload a photo..." />

                    <label className="inputs" htmlFor="description">Description:</label>
                    <textarea name="description" value={values.description} onChange={changeHandler} id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Course" />
                </div>
            </form>
        </section>
    );
}