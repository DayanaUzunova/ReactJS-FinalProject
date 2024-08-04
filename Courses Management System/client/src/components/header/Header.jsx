import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export default function Header() {
    const { isAuthenticated } = useAuthContext();
    return (
        <header>
            <h1 className='header-title'><Link className="home" to="/">Courses Management System</Link></h1>
            <nav>
                <Link to="/courses">All Courses</Link>
                {isAuthenticated
                    ? (
                        <div id="user">
                            <Link to="/courses/create">Create Course</Link>
                            <Link to='/search'>Search</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link to='/search'>Search</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}