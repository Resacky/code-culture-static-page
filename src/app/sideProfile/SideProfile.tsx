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
import Link from 'next/link';

export default function SideProfile() {
    return (
        <div className={styles.sideProfile}>
            <Link className={styles.container} href="/" >
                <div className={styles.profile}>
                    <Image src={profile} alt="" draggable="false" className={styles.profileImage} />
                </div>
                <p className={styles.text}> Profile </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={groupColored} alt="" draggable="false" className={styles.groupImage} />
                </div>
                <p className={styles.text}> Coder Companion </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={post} alt="" draggable="false" className={styles.groupImage} />
                </div>
                <p className={styles.text}> Post Something </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={question} alt="" draggable="false" className={styles.groupImage} />
                </div>
                <p className={styles.text}> Questions </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={media} alt="" draggable="false" className={styles.mediaImage} />
                </div>
                <p className={styles.text}> Media </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={events} alt="" draggable="false" className={styles.groupImage} />
                </div>
                <p className={styles.text}> Events </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={bookmark} alt="" draggable="false" className={styles.groupImage} />
                </div>
                <p className={styles.text}> Bookmarks </p>
            </Link>
            <Link className={styles.container} href="/" >
                <div className={styles.groupProfile}>
                    <Image src={logo} alt="" draggable="false" className={styles.logo} />
                </div>
                <p className={styles.text}> Premium </p>
            </Link>
        </div>
    );
}