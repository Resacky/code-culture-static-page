'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

import profile from '../../assets/user.svg';
import groupColored from '../../assets/group-color.svg';
import post from '../../assets/add-button.svg';
import question from '../../assets/question.svg';
import media from '../../assets/play.svg';
import events from '../../assets/schedule.svg'
import bookmark from '../../assets/bookmark.svg'
import logo from '../../assets/logo.svg';
import collapse from '../../assets/arrow.svg';
import Link from 'next/link';

export default function SideProfile() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={isCollapsed ? styles.collapsedSideProfile : styles.sideProfile}>
            <div className={isCollapsed ? styles.collapsedGrid : styles.leftGrid}>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.profile}>
                        <Image src={profile} alt="" draggable="false" className={styles.profileImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Profile </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={groupColored} alt="" draggable="false" className={styles.groupImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Coder Companion </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={post} alt="" draggable="false" className={styles.groupImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Post Something </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={question} alt="" draggable="false" className={styles.groupImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Questions </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={media} alt="" draggable="false" className={styles.mediaImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Media </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={events} alt="" draggable="false" className={styles.groupImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Events </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={bookmark} alt="" draggable="false" className={styles.groupImage} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Bookmarks </p>
                </Link>
                <Link className={isCollapsed ? styles.collapsedContainer : styles.container} href="/" >
                    <div className={styles.groupProfile}>
                        <Image src={logo} alt="" draggable="false" className={styles.logo} />
                    </div>
                    <p className={`${styles.text} ${isCollapsed ? styles.collapsedText : ''}`}> Premium </p>
                </Link>
            </div>
            <div className={styles.rightGrid}>
                <Image className={isCollapsed ? styles.collapseRotate : styles.collapse} src={collapse} alt={''} onClick={toggleCollapse} />
            </div>
        </div>
    );
}