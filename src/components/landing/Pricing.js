"use client";
import { Check, X, Zap, Building2 } from "lucide-react";
import Link from "next/link";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Pro",
    icon: Zap,
    tagline: "Pra media buyer que roda trafego pago todo dia.",
    price: "97",
    period: "/mes",
    features: [
      { text: "Todos os filtros liberados", included: true },
      { text: "Buscas ilimitadas", included: true },
      { text: "Facebook Ads completo", included: true },
      { text: "Analise criativa avancada", included: true },
      { text: "Rastreamento de concorrentes", included: true },
      { text: "Colecoes + compartilhamento", included: true },
      { text: "Exportacoes (CSV, PDF)", included: true },
      { text: "Cloakers, VSL, Camuflagem", included: true },
      { text: "TikTok Ads", included: false },
    ],
    popular: false,
  },
  {
    name: "Business",
    icon: Building2,
    tagline: "Pra times, agencias e quem precisa de TUDO liberado.",
    price: "297",
    period: "/mes",
    features: [
      { text: "Tudo do Pro", included: true },
      { text: "TikTok Ads completo", included: true },
      { text: "Todos os filtros do TikTok", included: true },
      { text: "Usuarios ilimitados", included: true },
      { text: "Suporte prioritario 24/7", included: true },
      { text: "API completa", included: true },
      { text: "Relatorios white-label", included: true },
      { text: "Workspace de time", included: true },
      { text: "Onboarding personalizado", included: true },
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className={`section ${styles.section}`}>
      <div className={`container text-center`}>
        <div className="section-label"><Zap size={14} /> Precos</div>
        <h2 className="section-title">Simples de escolher. <span className="text-gradient">Vantagem injusta.</span></h2>
        <p className="section-subtitle">Escolha o plano e libera tudo. PIX ou cartao, processados pela Cakto em segundos — cancele quando quiser, sem multa.</p>
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.plan} ${plan.popular ? styles.popular : ""}`}>
              {plan.popular && <div className={styles.badge}>Mais popular</div>}
              <div className={styles.planHeader}>
                <div className={styles.planIcon}><plan.icon size={20} /></div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
                <div className={styles.priceWrap}>
                  <span className={styles.currency}>R$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>
              <div className={styles.planFeatures}>
                {plan.features.map((f, j) => (
                  <div key={j} className={`${styles.featureItem} ${!f.included ? styles.disabled : ""}`}>
                    {f.included ? <Check size={16} className={styles.checkIcon} /> : <X size={16} className={styles.xIcon} />}
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/register" className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"} ${styles.planBtn}`}>
                Comecar agora
              </Link>
            </div>
          ))}
        </div>
        <p className={styles.enterprise}>Precisa de algo maior? <a href="mailto:contato@adsearcher.pro" className={styles.enterpriseLink}>Fale com vendas</a> pra planos enterprise.</p>
      </div>
    </section>
  );
}
