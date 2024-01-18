// components/Layout.tsx
import React from "react";
import Head from "next/head";
import Header from "./header";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Your Website Title</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
