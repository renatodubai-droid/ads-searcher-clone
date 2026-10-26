"use client";
import { Search, SlidersHorizontal, ArrowUpDown, Grid3X3, Heart, MessageCircle, Share2, ExternalLink, TrendingUp } from "lucide-react";
import styles from "./SearchPreview.module.css";

const mockResults = [
  { hook: "O metodo que gerou R$500k em 30 dias", advertiser: "ScaleUp Media", platform: "Meta", format: "Video", days: 45, likes: 12400, score: 94, color: "hsl(270,60%,25%)" },
  { hook: "3 erros fatais que destroem suas campanhas", advertiser: "Growth Hackers BR", platform: "Meta", format: "Carrossel", days: 32, likes: 8900, score: 87, color: "hsl(200,60%,25%)" },
  { hook: "Pare de gastar com ads que nao convertem", advertiser: "ConvertMax", platform: "TikTok", format: "Video", days: 67, likes: 23100, score: 92, color: "hsl(150,60%,25%)" },
  { hook: "Como escalei de R$0 a R$100k/mes", advertiser: "AdPro Brasil", platform: "Meta", format: "Imagem", days: 21, likes: 5600, score: 78, color: "hsl(320,60%,25%)" },
  { hook: "Esta tecnica simples aumentou conversoes em 340%", advertiser: "Pixel Performance", platform: "TikTok", format: "Reels", days: 53, likes: 18700, score: 91, color: "hsl(30,60%,25%)" },
  { hook: "O framework de copy que triplicou meu ROAS", advertiser: "Creative Lab", platform: "Meta", format: "Video", days: 28, likes: 7300, score: 83, color: "hsl(100,60%,25%)" },
];

export default function SearchPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container text-center`}>
        <h2 className="section-title">Uma busca feita pra <span className="text-gradient">pesquisa criativa</span></h2>
        <p className="section-subtitle">A interface que substitui 12 abas, 8 filtros e horas de scroll. Todos os parametros que importam. Zero ruido.</p>
      </div>
      <div className={styles.previewWrap}>
        <div className={styles.preview}>
          <div className={styles.toolbar}>
            <div className={styles.searchBar}>
              <Search size={16} className={styles.searchIcon} />
              <span className={styles.searchText}>Buscar anuncios vencedores...</span>
            </div>
            <div className={styles.toolbarActions}>
              <div className={styles.filterBtn}><SlidersHorizontal size={14} /> Filtros</div>
              <div className={styles.filterBtn}><ArrowUpDown size={14} /> Score</div>
              <div className={styles.filterBtn}><Grid3X3 size={14} /> Grid</div>
            </div>
          </div>
          <div className={styles.statusBar}>
            <span className={styles.statusCount}>19.201 anuncios</span>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>ordenado por score de vencedor</span>
          </div>
          <div className={styles.grid}>
            {mockResults.map((ad, i) => (
              <div key={i} className={styles.adCard}>
                <div className={styles.adThumb} style={{ background: ad.color }}>
                  <div className={styles.adPlatform}>{ad.platform}</div>
                  <div className={styles.adFormat}>{ad.format}</div>
                </div>
                <div className={styles.adBody}>
                  <p className={styles.adHook}>{ad.hook}</p>
                  <span className={styles.adAdvertiser}>{ad.advertiser}</span>
                  <div className={styles.adMeta}>
                    <span className={styles.adMetric}><Heart size={12} /> {(ad.likes / 1000).toFixed(1)}k</span>
                    <span className={styles.adMetric}><TrendingUp size={12} /> {ad.days}d</span>
                    <span className={styles.adScore} data-high={ad.score >= 85}>{ad.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.previewGlow} />
      </div>
    </section>
  );
}
