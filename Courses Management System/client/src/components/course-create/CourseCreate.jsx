export default function CourseCreate() {
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">

                    <h1>Create Course</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="teacherName">Name:</label>
                    <input type="text" id="name" name="name" value="" />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Course" />
                </div>
            </form>
        </section>
    );
}