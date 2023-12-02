import Link from 'next/link';
import styles from './styles.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.agreementText}>
                <Link className={styles.agreementLink} href='/'>About</Link> •
                <Link className={styles.agreementLink} href='/'>Help Center</Link> • 
                <Link className={styles.agreementLink} href='/'>Content Policy</Link> • 
                <Link className={styles.agreementLink} href='/'>Code of Conduct</Link> • 
                <Link className={styles.agreementLink} href='/'>Terms of Service</Link> • 
                <Link className={styles.agreementLink} href='/'>More</Link>
            </div>
            <div className={styles.copyright}>
                Code Culture, Inc @ 2023. All rights reserved.
            </div>
        </div>
    );
}
