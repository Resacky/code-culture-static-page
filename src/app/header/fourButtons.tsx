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

    const [activeButton, setActiveButton] = useState('homepage');

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={styles.fourButtons}>
            <Link href="/">
                <Image
                    className={`${styles.homepage} ${activeButton === 'homepage' ? styles.imageClicked : ''}`}
                    src={activeButton === 'homepage' ? greenHomepage : homepage}
                    alt=""
                    draggable="false"
                    onClick={() => handleButtonClick('homepage')}
                />
            </Link>
            <Link href="/">
                <Image
                    className={`${styles.play} ${activeButton === 'play' ? styles.imageClicked : ''}`}
                    src={activeButton === 'play' ? greenPlay : play}
                    alt=""
                    draggable="false"
                    onClick={() => handleButtonClick('play')}
                />
            </Link>
            <Link href="/">
                <Image
                    className={`${styles.code} ${activeButton === 'code' ? styles.imageClicked : ''}`}
                    src={activeButton === 'code' ? greenCode : code}
                    alt=""
                    draggable="false"
                    onClick={() => handleButtonClick('code')}
                />
            </Link>
            <Link href="/">
                <Image
                    className={`${styles.group} ${activeButton === 'group' ? styles.imageClicked : ''}`}
                    src={activeButton === 'group' ? greenGroup : group}
                    alt=""
                    draggable="false"
                    onClick={() => handleButtonClick('group')}
                />
            </Link>
        </div>
    );
}