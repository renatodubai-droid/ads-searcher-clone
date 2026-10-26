"use client";
import { useEffect } from "react";
import {
  X,
  Sparkles,
  ExternalLink,
  Download,
  Share2,
  TrendingUp,
  Heart,
  MessageCircle,
  Clock,
  Layers,
  Target,
  CheckCircle2,
  Laptop
} from "lucide-react";
import styles from "./AdDetailModal.module.css";

export default function AdDetailModal({ ad, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!ad) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={`${styles.platformBadge} ${ad.platform === "TikTok" ? styles.tiktok : styles.meta}`}>
              {ad.platform}
            </div>
            <span className={styles.adId}>ID: {ad.id}</span>
            <div className={styles.scoreBadge} data-high={ad.score >= 85}>
              <Sparkles size={12} /> Score: {ad.score}
            </div>
          </div>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.leftCol}>
            <div className={styles.previewBox} style={{ backgroundColor: ad.thumbnailColor }}>
              <div className={styles.previewOverlay} />
              <div className={styles.previewInfo}>
                <span className={styles.previewPlatform}>{ad.platform} · {ad.format}</span>
                <p className={styles.previewHook}>"{ad.hook}"</p>
                <div className={styles.ctaButtonMock}>{ad.cta}</div>
              </div>
            </div>

            <div className={styles.metaRow}>
              <div className={styles.metaBox}>
                <span className={styles.metaLabel}>Anunciante</span>
                <span className={styles.metaValue}>{ad.advertiser}</span>
              </div>
              <div className={styles.metaBox}>
                <span className={styles.metaLabel}>Nicho</span>
                <span className={styles.metaValue}>{ad.category}</span>
              </div>
              <div className={styles.metaBox}>
                <span className={styles.metaLabel}>Inicio</span>
                <span className={styles.metaValue}>{ad.startDate}</span>
              </div>
              <div className={styles.metaBox}>
                <span className={styles.metaLabel}>Dias Ativo</span>
                <span className={styles.metaValue}>{ad.daysActive} dias</span>
              </div>
            </div>

            <div className={styles.actionsBar}>
              <button className="btn btn-primary btn-sm">
                <Download size={14} /> Baixar Criativo
              </button>
              <button className="btn btn-secondary btn-sm">
                <Laptop size={14} /> Abrir Landing Page
              </button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.analysisSection}>
              <h3 className={styles.sectionTitle}>
                <Target size={16} className={styles.titleIcon} />
                Engenharia Reversa Criativa
              </h3>

              <div className={styles.insightCard}>
                <div className={styles.insightHeader}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <strong>Analise do Gancho (Hook):</strong>
                </div>
                <p className={styles.insightText}>
                  Usa quebra de padrao com curiosidade negativa. A frase ativa o medo de perder dinheiro ou ficar para tras, retendo atencao nos primeiros 3 segundos.
                </p>
              </div>

              <div className={styles.insightCard}>
                <div className={styles.insightHeader}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <strong>Angulo de Venda:</strong>
                </div>
                <p className={styles.insightText}>
                  Proposta direta com foco em ROI e simplicidade. O anuncio posiciona a solucao como "vantagem injusta" contra concorrentes lentos.
                </p>
              </div>

              <div className={styles.insightCard}>
                <div className={styles.insightHeader}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <strong>Caminho de Conversao:</strong>
                </div>
                <p className={styles.insightText}>
                  Criativo ({ad.format}) ? Pagina de Captura direta com VSL rapida de 8 minutos ? Checkout com Order Bump e 1-click upsell.
                </p>
              </div>
            </div>

            <div className={styles.curveSection}>
              <h3 className={styles.sectionTitle}>
                <TrendingUp size={16} className={styles.titleIcon} />
                Curva de Engajamento & Proxy de Spend
              </h3>
              <div className={styles.curveChart}>
                <div className={styles.barItem} style={{ height: "40%" }}>
                  <span className={styles.barLabel}>Sem 1</span>
                </div>
                <div className={styles.barItem} style={{ height: "65%" }}>
                  <span className={styles.barLabel}>Sem 2</span>
                </div>
                <div className={styles.barItem} style={{ height: "85%" }}>
                  <span className={styles.barLabel}>Sem 3</span>
                </div>
                <div className={styles.barItem} style={{ height: "100%" }}>
                  <span className={styles.barLabel}>Sem 4</span>
                </div>
                <div className={styles.barItem} style={{ height: "92%" }}>
                  <span className={styles.barLabel}>Sem 5</span>
                </div>
                <div className={styles.barItem} style={{ height: "88%" }}>
                  <span className={styles.barLabel}>Sem 6</span>
                </div>
              </div>
              <span className={styles.chartFootnote}>
                Campanha em escala contínua com estimativa de spend R$ 35k+/mês.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
