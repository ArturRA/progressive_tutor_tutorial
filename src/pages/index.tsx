import React from "react";
import Head from "next/head";
import CardRow from "../components/CardRow/CardRow";
import { getPageMetadata } from "../utils/pageMetadata";

import styles from "./index.module.css";

export default function Home() {
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
          <h1 className={styles.title}>ProgressiveTutor</h1>
          <h2 className={styles.subtitle}>
          Este é o tutorial MultiPlataforma denominado ProgressiveTutor que foi desenvolvido durante o TCC do aluno Artur R.A. 
          da Universidade Federal de Santa Catarina (UFSC).
          </h2>
          <CardRow
            links={[
              {
                title: "Sistema Desktop",
                description: "Tutorial de como fazer um sistema completo contendo front-end, back-end,"
                + "uma API para fazer a comunicação entre os dois e um sistema de autenticação voltado para aplicações desktop.",
                url: "/Desktop/01",
              },
              {
                title: "Sistema MultiPlataforma",
                description: "Tutorial de como fazer um sistema completo contendo front-end, back-end,"
                + "uma API para fazer a comunicação entre os dois e um sistema de autenticação voltado para aplicações multiPlataforma.",
                url: "/MultiPlataforma/01",
              },
              {
                title: "Sistema Mobile",
                description: "Tutorial de como fazer um sistema completo contendo front-end, back-end,"
                + "uma API para fazer a comunicação entre os dois e um sistema de autenticação voltado para aplicações mobile.",
                url: "/Mobile/01",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
