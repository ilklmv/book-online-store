// pages/_app.tsx
import React from "react";
import Layout from "../components/layout";
import "../styles/globals.css"; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
