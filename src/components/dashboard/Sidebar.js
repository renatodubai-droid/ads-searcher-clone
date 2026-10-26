"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  FolderHeart,
  Eye,
  ShoppingBag,
  Sliders,
  LogOut,
  Zap,
  Sparkles,
  ExternalLink
} from "lucide-react";
import styles from "./Sidebar.module.css";

const menuItems = [
  { name: "Busca de Anuncios", icon: Search, href: "/dashboard", active: true },
  { name: "Minhas Colecoes", icon: FolderHeart, href: "#", badge: "14" },
  { name: "Rastrear Concorrentes", icon: Eye, href: "#", badge: "8" },
  { name: "Produtos Vencedores", icon: ShoppingBag, href: "#" },
  { name: "Configuracoes", icon: Sliders, href: "#" },
];

export default function Sidebar({ user }) {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adsearcher_user");
    }
    router.push("/login");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Search size={18} />
          </div>
          <span className={styles.logoText}>Ads Searcher</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSectionLabel}>Inteligencia</div>
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className={`${styles.navItem} ${item.active ? styles.active : ""}`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
              {item.badge && <span className={styles.badge}>{item.badge}</span>}
            </a>
          );
        })}
      </nav>

      <div className={styles.proBanner}>
        <div className={styles.proHeader}>
          <Zap size={16} className={styles.proIcon} />
          <span className={styles.proTitle}>Plano Pro Ativo</span>
        </div>
        <p className={styles.proDesc}>
          19.201 anuncios disponiveis e atualizados diariamente.
        </p>
        <Link href="/#precos" className={styles.upgradeBtn}>
          Ver outros planos <ExternalLink size={12} />
        </Link>
      </div>

      <div className={styles.userFooter}>
        <div className={styles.avatar}>
          {user?.avatar || "AD"}
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>{user?.name || "Media Buyer"}</span>
          <span className={styles.userEmail}>{user?.email || "usuario@adsearcher.pro"}</span>
        </div>
        <button onClick={handleLogout} title="Sair da conta" className={styles.logoutBtn}>
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  );
}
