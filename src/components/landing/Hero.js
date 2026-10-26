"use client";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.gridBg} />
      <div className={`container ${styles.content}`}>
        <div className={`section-label animate-fade-in-up`}>
          <Sparkles size={14} />
          Plataforma de inteligencia de anuncios
        </div>
        <h1 className={`${styles.title} animate-fade-in-up delay-1`}>
          Encontre anuncios vencedores{" "}
          <span className="text-gradient">antes de todo mundo</span>
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-2`}>
          A plataforma de inteligencia de anuncios usada pelos melhores media buyers do Brasil.
          Filtre as bibliotecas do Meta e TikTok com precisao cirurgica — e engenharia reversa
          em tudo que esta dando resultado.
        </p>
        <div className={`${styles.actions} animate-fade-in-up delay-3`}>
          <Link href="/register" className="btn btn-primary btn-lg">
            Criar conta gratis
            <ArrowRight size={18} />
          </Link>
          <span className={styles.actionNote}>Cadastro gratis · Cancele quando quiser</span>
        </div>
        <div className={`${styles.stats} animate-fade-in-up delay-4`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>19.201+</span>
            <span className={styles.statLabel}>Anuncios indexados</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>8.070+</span>
            <span className={styles.statLabel}>Contas ativas</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>2 plataformas</span>
            <span className={styles.statLabel}>Meta + TikTok</span>
          </div>
        </div>
      </div>
    </section>
  );
}
