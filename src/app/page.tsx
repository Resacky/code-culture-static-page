import React from "react";
import styles from "./styles.module.css";

import Header from "./header/Header.tsx";
import Footer from './footer/Footer.tsx';
import SideProfile from './sideProfile/SideProfile';

export default function StaticPage() {
    return (
        <div className={styles.box}>
            <Header />
            <SideProfile />
            {/* this is where the body of the site would go, 
            and would vary depending on what the user clicks */}
            <Footer />
        </div>
    );
};