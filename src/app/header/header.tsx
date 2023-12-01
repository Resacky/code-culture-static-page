import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../assets/CodeCultureLogo.png';

export default function header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    <Image className={styles.logo} src={logo} alt="" />
                </Link>

                
        
            </nav>
        </header>
    );
}