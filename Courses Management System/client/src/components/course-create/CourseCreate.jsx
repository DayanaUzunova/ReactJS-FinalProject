import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";
import { useCreateCourse } from "../../hooks/useCourses";
import { useState } from "react";

const initialValues = {
    title: '',
    category: '',
    imageUrl: '',
    description: ''
}

export default function CourseCreate() {
    const navigate = useNavigate();
    const createCourse = useCreateCourse();

    const [errors, setErrors] = useState({
        title: '',
        category: '',
        imageUrl: '',
        description: ''
    });

    const createHandler = async (values) => {
        const { title, category, imageUrl, description } = values;

        let hasError = false;
        const newErrors = {
            title: '',
            category: '',
            imageUrl: '',
            description: ''
        };

        // Validate each field
        if (title.trim() === '') {
            newErrors.title = 'Title is required!';
            hasError = true;
        }

        if (category.trim() === '') {
            newErrors.category = 'Category is required!';
            hasError = true;
        }

        if (imageUrl.trim() === '') {
            newErrors.imageUrl = 'Image URL is required!';
            hasError = true;
        } else {
            const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/i;
            if (!urlPattern.test(imageUrl)) {
                newErrors.imageUrl = 'Please enter a valid URL!';
                hasError = true;
            }
        }

        if (description.trim() === '') {
            newErrors.description = 'Description is required!';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        try {
            const { _id: courseId } = await createCourse(values);
            navigate(`/courses/${courseId}/details`);
        } catch (err) {
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
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter course name..."
                    />
                    {errors.title && (
                        <span style={{ color: 'red', fontSize: '23px' }}>{errors.title}</span>
                    )}

                    <label className="inputs" htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                        placeholder="Enter course category..."
                    />
                    {errors.category && (
                        <span style={{ color: 'red', fontSize: '23px' }}>{errors.category}</span>
                    )}

                    <label className="inputs" htmlFor="course-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..."
                    />
                    {errors.imageUrl && (
                        <span style={{ color: 'red', fontSize: '23px' }}>{errors.imageUrl}</span>
                    )}

                    <label className="inputs" htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        id="description"
                        placeholder="Enter course description..."
                    />
                    {errors.description && (
                        <span style={{ color: 'red', fontSize: '23px' }}>{errors.description}</span>
                    )}

                    <input className="btn submit" type="submit" value="Create Course" />
                </div>
            </form>
        </section>
    );
}