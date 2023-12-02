import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

import messaging from '../../assets/chat.svg';
import notifications from '../../assets/bell.svg';
import settings from '../../assets/gear.png';
import profile from '../../assets/user.svg';

export default function SettingButtons() {
    return (
        <div className={styles.fiveButtons}>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.messaging} src={messaging} alt='' />
                </div>
            </Link>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.notifications} src={notifications} alt='' />
                </div>
            </Link>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.settings} src={settings} alt='' />
                </div>
            </Link>
            <Link href="/">
                <div className={styles.settingContainer}>
                    <Image className={styles.profile} src={profile} alt='' />
                </div>
            </Link>
        </div>
    );
}