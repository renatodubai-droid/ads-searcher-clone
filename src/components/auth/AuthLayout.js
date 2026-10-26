import Link from "next/link";
import { Search, Sparkles, ArrowLeft, Quote } from "lucide-react";
import styles from "./AuthLayout.module.css";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <div className={styles.leftGlow} />
        <div className={styles.leftContent}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} /> Voltar para o inicio
          </Link>

          <div className={styles.heroBrand}>
            <div className={styles.logoBadge}>
              <Search size={20} />
            </div>
            <span className={styles.logoTitle}>Ads Searcher</span>
          </div>

          <div className={styles.heroText}>
            <div className={styles.badge}>
              <Sparkles size={14} /> Inteligencia de Anuncios
            </div>
            <h1 className={styles.heroHeading}>
              A lupa sobre todo <span className="text-gradient">anuncio vencedor</span>
            </h1>
            <p className={styles.heroDesc}>
              Filtre as bibliotecas do Meta e TikTok com precisao cirurgica.
              Engenharia reversa em tudo que esta funcionando — antes da concorrencia sequer notar.
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <Quote size={24} className={styles.quoteIcon} />
            <p className={styles.testimonialText}>
              "Ads Searcher entregou o que a minha ultima ferramenta de ad spy so prometia. E a primeira coisa que abro toda manha."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>LF</div>
              <div>
                <div className={styles.authorName}>Lucas Ferreira</div>
                <div className={styles.authorRole}>Media Buyer, Growth Agency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightPane}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
