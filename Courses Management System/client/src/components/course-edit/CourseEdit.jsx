export default function CourseEdit() {
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Edit Course</h1>
                    <label htmlFor="leg-title">Name:</label>
                    <input type="text" id="title" name="title" value="" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value="" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="" />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Course" />

                </div>
            </form>
        </section>
    );
}