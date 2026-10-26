"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Search size={18} />
          </div>
          <span className={styles.logoText}>Ads Searcher</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <a href="#recursos" className={styles.link} onClick={() => setMenuOpen(false)}>Recursos</a>
          <a href="#precos" className={styles.link} onClick={() => setMenuOpen(false)}>Precos</a>
          <a href="#faq" className={styles.link} onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>

        <div className={styles.actions}>
          <Link href="/login" className={`btn btn-ghost ${styles.loginBtn}`}>Entrar</Link>
          <Link href="/register" className="btn btn-primary">Criar conta gratis</Link>
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
