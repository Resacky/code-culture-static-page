'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { SetStateAction, useState } from 'react';

import messaging from '../../assets/chat.svg';
import notifications from '../../assets/bell.svg';
import settings from '../../assets/gear.png';
import profile from '../../assets/user.svg';
import greenMessaging from '../../assets/chat-green.svg';
import greenNotifications from '../../assets/bell-green.svg';
import greenSettings from '../../assets/gear-green.svg';
import greenProfile from '../../assets/user-green.svg';

export default function SettingButtons() {

    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    };

    return (
        <div className={styles.settingButtons}>
            <Link className={styles.settingContainer} href="/" onClick={() => handleButtonClick('messaging')}>
                <Image className={styles.messaging} src={activeButton == 'messaging' ? greenMessaging : messaging}
                    alt='' draggable="false" />
            </Link>
            <Link className={styles.settingContainer} href="/" onClick={() => handleButtonClick('notifications')}>
                <Image className={styles.notifications} src={activeButton == 'notifications' ? greenNotifications : notifications}
                    alt='' draggable="false" />
            </Link>
            <Link className={styles.settingContainer} href="/" onClick={() => handleButtonClick('settings')}>
                <Image className={styles.settings} src={activeButton == 'settings' ? greenSettings : settings}
                    alt='' draggable="false" />
            </Link>
            <Link className={styles.settingContainer} href="/" onClick={() => handleButtonClick('profile')}>
                <Image className={styles.profile} src={activeButton == 'profile' ? greenProfile : profile}
                    alt='' draggable="false" />
            </Link>
        </div>
    );
}