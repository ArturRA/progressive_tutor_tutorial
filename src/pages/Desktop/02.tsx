import React from "react";
import Head from "next/head";
import CardRow from "../../components/CardRow/CardRow";
import { getPageMetadata } from "../../utils/pageMetadata";
import styles from "../index.module.css";

export default function DesktopPage() {
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
          <h1 className={styles.title}>ProgressiveTutor: Sistema Desktop</h1>
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
                title: "Anterior",
                description: "Voltar para a pagina anterior",
                url: "/Desktop/01",
              },
              {
                title: "Home",
                description: "Voltar para a seleção de tipo de tecnologia",
                url: "/",
              },
              {
                title: "Proximo",
                description: "Ir para a pagina seguinte",
                url: "/Desktop/02",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
