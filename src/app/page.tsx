import React from "react";
import styles from "./styles.module.css";

import Header from "./header/Header";
import Footer from './footer/Footer';
import SideProfile from './sideProfile/SideProfile';

export default function StaticPage() {
    return (
        <div className={styles.box}>
            <Header />
            <SideProfile />
            <Footer />
        </div>
    );
};