import React from "react";
import Head from "next/head";
import CardRow from "../../components/CardRow/CardRow";
import { getPageMetadata } from "../../utils/pageMetadata";
import styles from "../index.module.css";

export default function Page01() {
  const { pageTitle, pageDescription } = getPageMetadata("ProgressiveTutor");

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>ProgressiveTutor Title</h1>
          <h2 className={styles.subtitle}>
            Description of what will be talked about on this page Description
            of what will be talked about on this page Description of what will
            be talked about on this page Description of what will be talked
            about on this page Description of what will be talked about on this
            page Description of what will be talked about on this page
            Description of what will be talked about on this page Description
            of what will be talked about on this page
          </h2>
          <CardRow
            links={[
              {
                title: "MultiPlataforma",
                description: "MultiPlataforma",
                url: "/MultiPlataforma/01",
              },
              {
                title: "Link 2",
                description: "Description 2",
                url: "/MultiPlataforma/01",
              },
              {
                title: "Link 3",
                description: "Description 3",
                url: "/MultiPlataforma/01",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
