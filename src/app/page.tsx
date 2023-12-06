import React from "react";
import styles from "./styles.module.css";

import Header from "./Header/Header";
import Footer from './Footer/Footer';
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