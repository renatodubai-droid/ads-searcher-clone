"use client";
import { Search, BarChart3, SlidersHorizontal, Eye, FolderHeart, Languages, TrendingUp, ShoppingBag } from "lucide-react";
import { FEATURES } from "@/data/ads";
import styles from "./Features.module.css";

const iconMap = { Search, BarChart3, SlidersHorizontal, Eye, FolderHeart, Languages, TrendingUp, ShoppingBag };

export default function Features() {
  return (
    <section id="recursos" className={`section ${styles.section}`}>
      <div className={`container text-center`}>
        <div className="section-label">Recursos</div>
        <h2 className="section-title">
          Tudo que voce precisa pra{" "}
          <span className="text-gradient">dominar o jogo</span>
        </h2>
        <p className="section-subtitle">
          Pare de perder horas rolando bibliotecas de anuncios. O Ads Searcher mostra o que
          esta realmente convertendo — com o contexto necessario pra copiar, adaptar e escalar.
        </p>
        <div className={styles.grid}>
          {FEATURES.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={i} className={`card card-glow ${styles.feature}`}>
                <div className={styles.iconWrap}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
