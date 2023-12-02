import React from "react";
import styles from "./styles.module.css";

import Header from "./header/Header";
import Footer from './footer/Footer';

export default function StaticPage() {
    return (
        <div className={styles.box}>
            <Header/>
            <Footer />
        </div>
    );
};