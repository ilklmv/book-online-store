// components/Header.tsx
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Bookshop</h1>
      <nav>
        <ul className={styles.shop_menu}>
          <li>
            <Link href="/">Books</Link>
          </li>
          <li>
            <Link href="/audiobooks">Audiobooks</Link>
          </li>
          <li>
            <Link href="/stationery&gifts">Stationery & Gifts</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <Link href="/profile">
          <img src="/profile-icon.png" alt="Profile Icon" />
        </Link>
        <Link href="/cart">
          <img src="/cart-icon.png" alt="Cart Icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
