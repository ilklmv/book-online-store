import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Your Website Title</title>
        {/* Add your meta tags, stylesheets, etc. */}
      </Head>
      <header>{/* Your navigation, search, and site name */}</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
