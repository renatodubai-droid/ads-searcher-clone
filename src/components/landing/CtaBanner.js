"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container`}>
        <div className={styles.banner}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <div className="section-label">
              <Sparkles size={14} /> Comece em 60 segundos
            </div>
            <h2 className={styles.title}>
              Pronto pra ver o que seus concorrentes{" "}
              <span className="text-gradient">nao mostram?</span>
            </h2>
            <p className={styles.subtitle}>
              Junte-se as 8.070 contas que usam o Ads Searcher pra lancar criativos vencedores toda semana.
              Setup em menos de 60 segundos.
            </p>
            <div className={styles.actions}>
              <Link href="/register" className="btn btn-primary btn-lg">
                Criar conta gratis <ArrowRight size={18} />
              </Link>
              <a href="#precos" className="btn btn-secondary btn-lg">
                Ver planos
              </a>
            </div>
            <div className={styles.badges}>
              <div className={styles.badgeItem}>
                <CheckCircle2 size={16} className={styles.badgeIcon} />
                <span>Cadastro gratis</span>
              </div>
              <div className={styles.badgeItem}>
                <CheckCircle2 size={16} className={styles.badgeIcon} />
                <span>Assinatura via PIX quando decidir</span>
              </div>
              <div className={styles.badgeItem}>
                <CheckCircle2 size={16} className={styles.badgeIcon} />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
