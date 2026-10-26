"use client";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  ExternalLink,
  Play,
  Bookmark,
  Sparkles,
  TrendingUp,
  Globe
} from "lucide-react";
import styles from "./AdCard.module.css";

export default function AdCard({ ad, onOpenDetail }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.thumb} style={{ backgroundColor: ad.thumbnailColor }}>
        <div className={styles.thumbOverlay} />
        
        <div className={styles.thumbTop}>
          <div className={`${styles.platformBadge} ${ad.platform === "TikTok" ? styles.tiktok : styles.meta}`}>
            {ad.platform}
          </div>
          <div className={styles.formatBadge}>
            {ad.format}
          </div>
        </div>

        {ad.format === "Video" || ad.hasVideo ? (
          <div className={styles.playIconWrap}>
            <Play size={20} fill="white" />
          </div>
        ) : null}

        <div className={styles.thumbBottom}>
          <div className={styles.scoreBadge} data-high={ad.score >= 85}>
            <Sparkles size={12} />
            <span>Score: {ad.score}</span>
          </div>
          <div className={styles.activeDays}>
            <TrendingUp size={12} />
            <span>{ad.daysActive}d ativo</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.metaHeader}>
          <span className={styles.advertiser}>{ad.advertiser}</span>
          <span className={styles.country}>
            <Globe size={11} /> {ad.country.code} · {ad.language}
          </span>
        </div>

        <p className={styles.hook}>"{ad.hook}"</p>

        <div className={styles.ctaTag}>
          CTA: <strong>{ad.cta}</strong>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <Heart size={14} className={styles.metricIcon} />
            <span>{(ad.likes / 1000).toFixed(1)}k</span>
          </div>
          <div className={styles.metricItem}>
            <MessageCircle size={14} className={styles.metricIcon} />
            <span>{ad.comments}</span>
          </div>
          <div className={styles.metricItem}>
            <Share2 size={14} className={styles.metricIcon} />
            <span>{ad.shares}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={() => onOpenDetail(ad)} className={`btn btn-secondary btn-sm ${styles.analyzeBtn}`}>
            Ver Analise Completa
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className={`${styles.iconBtn} ${saved ? styles.saved : ""}`}
            title="Salvar na colecao"
          >
            <Bookmark size={16} fill={saved ? "var(--accent)" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
}
