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
                {/* This div is for responsiveness purposes, hides the button until the screen shrinks to 840px */}
                <div className={styles.collapsedButton}>
                    <Link className={styles.settingContainer} href="/" onClick={handleMenuClick}>
                        <Image className={styles.menuVertical} src={isMenuClicked ? greenMenuVertical : menuVertical} alt="" draggable="false" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}