import Link from "next/link";
import { Search } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Search size={16} />
              </div>
              <span className={styles.logoText}>Ads Searcher</span>
            </Link>
            <p className={styles.brandDesc}>
              Plataforma de inteligencia de anuncios do Meta e do TikTok.
              Encontre, analise e escale criativos vencedores.
            </p>
            <div className={styles.badge}>
              <span className={styles.pulseDot} />
              <span>Sistemas operacionais</span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Produto</span>
            <a href="#recursos" className={styles.link}>Recursos</a>
            <a href="#precos" className={styles.link}>Precos</a>
            <Link href="/dashboard" className={styles.link}>Explorar App</Link>
            <a href="#faq" className={styles.link}>Perguntas Frequentes</a>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Recursos</span>
            <a href="#recursos" className={styles.link}>Guias de Criativos</a>
            <a href="#recursos" className={styles.link}>Swipe Files</a>
            <a href="mailto:contato@adsearcher.pro" className={styles.link}>Suporte</a>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Legal</span>
            <a href="#" className={styles.link}>Privacidade</a>
            <a href="#" className={styles.link}>Termos de Uso</a>
            <a href="#" className={styles.link}>Cookies</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Ads Searcher. Todos os direitos reservados.
          </p>
          <p className={styles.location}>
            Sao Paulo, Brasil · contato@adsearcher.pro
          </p>
        </div>
      </div>
    </footer>
  );
}
