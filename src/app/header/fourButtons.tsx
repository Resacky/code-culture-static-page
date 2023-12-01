import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import homepage from '../../assets/homepage.svg'
import play from '../../assets/media.svg'
import code from '../../assets/code.svg'
import group from '../../assets/group.svg'

export default function FourButtons() {
    return (
        <div className={styles.fourButtons}>
            <Link href="/">
                <Image className={styles.homepage} src={homepage} alt="" draggable="false" />
            </Link>
            <Link href="/">
                <Image className={styles.play} src={play} alt="" draggable="false" />
            </Link>
            <Link href="/">
                <Image className={styles.code} src={code} alt="" draggable="false" />
            </Link>
            <Link href="/">
                <Image className={styles.group} src={group} alt="" draggable="false" />
            </Link>
        </div>
    );
}