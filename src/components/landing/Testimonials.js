import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/ads";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={`section`}>
      <div className={`container text-center`}>
        <div className="section-label"><Star size={14} /> Depoimentos</div>
        <h2 className="section-title">A ferramenta que o top 1% dos media buyers <span className="text-gradient">nao larga</span></h2>
        <p className="section-subtitle">De dropshippers solo a marcas DTC listadas em bolsa, o Ads Searcher virou o padrao pra pesquisa criativa.</p>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`card ${styles.testimonial}`}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="var(--warning)" color="var(--warning)" />)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
