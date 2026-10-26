"use client";
import { Search, BarChart3, Rocket } from "lucide-react";
import styles from "./Steps.module.css";

const steps = [
  { num: "01", icon: Search, title: "Busque", desc: "Consulte 19.201 anuncios com filtros cirurgicos. Salve buscas, configure alertas e nunca perca um lancamento." },
  { num: "02", icon: BarChart3, title: "Analise", desc: "Cada gancho, angulo e caminho de conversao dissecado. Entenda o que realmente sustenta um criativo no ar." },
  { num: "03", icon: Rocket, title: "Escale", desc: "Exporte os vencedores pro seu time, rastreie concorrentes e lance mais rapido do que a curva de aprendizado deles." },
];

export default function Steps() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container text-center`}>
        <h2 className="section-title">Do zero ao anuncio vencedor em <span className="text-gradient">tres passos</span></h2>
        <p className="section-subtitle">Sem sessao de onboarding e sem manual de 30 paginas. Abriu o Ads Searcher, ja esta tres passos a frente.</p>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepIcon}><s.icon size={28} /></div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              {i < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
