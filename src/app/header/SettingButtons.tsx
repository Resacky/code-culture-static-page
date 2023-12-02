'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';

import messaging from '../../assets/chat.svg';
import notifications from '../../assets/bell.svg';
import settings from '../../assets/gear.png';
import profile from '../../assets/user.svg';
import greenMessaging from '../../assets/chat-green.svg';
import greenNotifications from '../../assets/bell-green.svg';
import greenSettings from '../../assets/gear-green.svg';
import greenProfile from '../../assets/user-green.svg';

export default function SettingButtons() {
    const [isMessagingClicked, setMessagingClicked] = useState(false);
    const [isNotificationsClicked, setNotificationsClicked] = useState(false);
    const [isSettingsClicked, setSettingsClicked] = useState(false);
    const [isProfileClicked, setProfileClicked] = useState(false);

    const handleMessagingClick = () => setMessagingClicked(!isMessagingClicked);
    const handleNotificationsClick = () => setNotificationsClicked(!isNotificationsClicked);
    const handleSettingsClick = () => setSettingsClicked(!isSettingsClicked);
    const handleProfileClick = () => setProfileClicked(!isProfileClicked);

    return (
        <div className={styles.fiveButtons}>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.messaging} src={isMessagingClicked ? greenMessaging : messaging} 
                    alt='' draggable="false" onClick={handleMessagingClick}/>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.notifications} src={isNotificationsClicked ? greenNotifications : notifications} 
                    alt='' draggable="false" onClick={handleNotificationsClick}/>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.settings} src={isSettingsClicked ? greenSettings : settings} 
                    alt='' draggable="false" onClick={handleSettingsClick}/>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.profile} src={isProfileClicked ? greenProfile : profile} 
                    alt='' draggable="false" onClick={handleProfileClick}/>
                </div>
            </Link>
        </div>
    );
}