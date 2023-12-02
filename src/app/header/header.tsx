import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import SearchBox from './SearchBox';
import FourButtons from './FourButtons';
import logo from '../../assets/logo.png';
import SettingButtons from './SettingButtons';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.firstContainer}>
                    <Link href="/">
                        <Image className={styles.logo} src={logo} alt="" draggable="false"/>
                    </Link>
                    <SearchBox />
                </div>
                <div className={styles.secondContainer}>
                    <FourButtons />
                </div>
                <div className={styles.thirdContainer}>
                    <SettingButtons />
                </div>
            </nav>
        </header>
    );
}