'use client';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

import homepage from '../../assets/homepage.svg'
import play from '../../assets/media.svg'
import code from '../../assets/code.svg'
import group from '../../assets/group.svg'
import greenHomepage from '../../assets/homepage-green.svg'
import greenPlay from '../../assets/media-green.svg'
import greenCode from '../../assets/code-green.svg'
import greenGroup from '../../assets/group-green.svg'

export default function FourButtons() {
    const [isHomepageClicked, setHomepageClicked] = useState(false);
    const [isPlayClicked, setPlayClicked] = useState(false);
    const [isCodeClicked, setCodeClicked] = useState(false);
    const [isGroupClicked, setGroupClicked] = useState(false);

    const handleHomepageClick = () => setHomepageClicked(!isHomepageClicked);
    const handlePlayClick = () => setPlayClicked(!isPlayClicked);
    const handleCodeClick = () => setCodeClicked(!isCodeClicked);
    const handleGroupClick = () => setGroupClicked(!isGroupClicked);

    return (
        <div className={styles.fourButtons}>
            <Link href="/">
                <Image className={`${styles.homepage} ${isHomepageClicked ? styles.imageClicked : ''}`}  src={isHomepageClicked ? greenHomepage : homepage} alt="" draggable="false" onClick={handleHomepageClick} />
            </Link>
            <Link href="/">
                <Image className={`${styles.play} ${isPlayClicked ? styles.imageClicked : ''}`}  src={isPlayClicked ? greenPlay : play} alt="" draggable="false" onClick={handlePlayClick} />
            </Link>
            <Link href="/">
                <Image className={`${styles.code} ${isCodeClicked ? styles.imageClicked : ''}`} src={isCodeClicked ? greenCode : code} alt="" draggable="false" onClick={handleCodeClick} />
            </Link>
            <Link href="/">
                <Image className={`${styles.group} ${isGroupClicked ? styles.imageClicked : ''}`} src={isGroupClicked ? greenGroup : group} alt="" draggable="false" onClick={handleGroupClick} />
            </Link>
        </div>
    );
}