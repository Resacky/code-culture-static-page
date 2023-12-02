import styles from './styles.module.css';
import Image from 'next/image';

import magnifyingGlass from '../../assets/search.svg';

export default function SearchBox() {
    return (
        <div className={styles.searchContainer}>
            <Image src={magnifyingGlass} alt="" className={styles.searchIcon} draggable="false" />
            <input type="text" className={styles.searchInput} placeholder="Search Code Culture" />
        </div>
    );
}