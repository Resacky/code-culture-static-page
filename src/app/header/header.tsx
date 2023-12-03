'use client';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import SearchBox from './SearchBox';
import FourButtons from './FourButtons';
import logo from '../../assets/logo.svg';
import SettingButtons from './SettingButtons';
import menuVertical from '../../assets/bar.svg'
import greenMenuVertical from '../../assets/bar-green.svg'
import { useState } from 'react';

export default function Header() {
    const [isMenuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => setMenuClicked(!isMenuClicked);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.firstContainer}>
                    <Link href="/">
                        <Image className={styles.logo} src={logo} alt="" draggable="false" />
                    </Link>
                    <SearchBox />
                </div>
                <div className={styles.secondContainer}>
                    <FourButtons />
                </div>
                <div className={styles.thirdContainer}>
                    <SettingButtons />
                </div>
                <div className={styles.collapsedButton}>
                    <Link href="/">
                        <Image className={styles.menuVertical} src={isMenuClicked ? greenMenuVertical : menuVertical} alt="" draggable="false" onClick={handleMenuClick} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}