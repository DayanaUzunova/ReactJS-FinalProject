import { Link } from 'react-router-dom'

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
   
    return (
        <nav className={styles.navbar}>
            <ul className={styles['nav-menu']}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/courses-list">COURSES</Link></li>
                
                        <li><Link to="/register">REGISTER</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/create">ADD COURSE</Link></li>
                        <li><Link to="/logout">LOGOUT</Link></li>
            </ul>
        </nav>
    );
}