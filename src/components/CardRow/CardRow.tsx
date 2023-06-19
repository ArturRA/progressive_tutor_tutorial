import React from "react";
import Link from "next/link";
import styles from "./CardRow.module.css";

interface LinkItem {
  title: string;
  description: string;
  url: string;
}

interface CardRowProps {
  links: LinkItem[];
}

export default function CardRow({ links }: CardRowProps) {
  return (
    <div className={styles.cardRow}>
      {links.map((link, index) => (
        <Link
          key={index}
          className={styles.card}
          href={link.url}
          target="_self"
        >
          <h3 className={styles.cardTitle}>{link.title} →</h3>
          <div className={styles.cardText}>{link.description}</div>
        </Link>
      ))}
    </div>
  );
}
