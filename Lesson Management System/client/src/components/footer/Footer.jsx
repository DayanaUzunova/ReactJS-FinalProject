import styles from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <address className={styles.footer__address}> 
                            Language High School, SU 24<br />
                            <abbr title="Phone"></abbr> (123) 457-5846-2415
                        </address>
                    </div>
                    <div className="col-md-4">
                        <p>&copy; {new Date().getFullYear()} SU Lessons Camp. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}