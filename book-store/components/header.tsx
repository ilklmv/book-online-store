// components/Header.tsx
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <img src="/profile-icon.png" alt="Profile Icon" />
        <Link href="/profile">
          <a>My Profile</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
