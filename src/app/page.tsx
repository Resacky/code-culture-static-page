import React from "react";
import styles from "./styles.module.css";

import Header from "./header/header";

export default function StaticPage() {
    return (
        <div className={styles.box}>
            <Header/>
        </div>
    );
};