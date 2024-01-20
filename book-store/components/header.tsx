// components/Header.tsx
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Bookshop</h1>
      <nav>
        <ul className={styles.shop_menu}>
          <li>
            <Link href="/">BOOKS</Link>
          </li>
          <li>
            <Link href="/audiobooks">AUDIOBOOKS</Link>
          </li>
          <li>
            <Link href="/stationery&gifts">STATIONERY & GIFTS</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "3rem",
        }}
      >
        <Link href="/profile">
          <img
            src="/user.svg"
            alt="Profile Icon"
            style={{ width: "12px", height: "15px" }}
          />
        </Link>
        <Link href="/cart">
          <img
            src="/shop bag.svg"
            alt="Basket Icon"
            style={{ width: "12px", height: "15px" }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
