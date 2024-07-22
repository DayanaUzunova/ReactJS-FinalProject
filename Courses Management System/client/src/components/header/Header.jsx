import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link className="home" to="/">Courses Management System</Link></h1>
            <nav>
                <Link to="/courses">All courses</Link>
                <div id="user">
                    <Link to="/courses/create">Create Course</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}