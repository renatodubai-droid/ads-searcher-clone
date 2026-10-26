"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { FAQ_ITEMS } from "@/data/ads";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className={`container`}>
        <div className="text-center">
          <div className="section-label">
            <HelpCircle size={14} /> FAQ
          </div>
          <h2 className="section-title">
            Respostas pras perguntas que <span className="text-gradient">todo mundo faz</span>
          </h2>
          <p className="section-subtitle">
            Ainda tem alguma duvida? Chama a gente em contato@adsearcher.pro — a gente responde em menos de 1 hora.
          </p>
        </div>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button className={styles.questionBtn} onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <span className={styles.questionText}>{item.question}</span>
                  <ChevronDown size={18} className={`${styles.chevron} ${isOpen ? styles.rotated : ""}`} />
                </button>
                <div className={`${styles.answerWrap} ${isOpen ? styles.visible : ""}`}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.supportBox}>
          <Mail size={18} className={styles.supportIcon} />
          <span>Ficou com alguma duvida especifica?</span>
          <a href="mailto:contato@adsearcher.pro" className={styles.supportLink}>
            Fale com nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
}
