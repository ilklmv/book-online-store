import React from "react";
import styles from "@/components/profile.module.css";

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PROFILE</h1>
      <div className={styles.container_profile}>
        <img src="./image 1.jpg" alt="Profile Icon" />
        <div className={styles.container_profile_information}>
          <h2 className={styles.profile_header}>YOUR NAME</h2>
          <p className={styles.profile_name}>John Smith</p>
          <h2 className={styles.profile_header}>YOUR EMAIL</h2>
          <p className={styles.profile_name}>example@mail.com</p>
          <button>{"Edit Profile"}</button>
        </div>
      </div>
      <div className={styles.container_about}>
        <h2 className={styles.about_header}>ABOUT ME</h2>
        <p className={styles.about_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante
          consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus
          quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla ac
          varius.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
