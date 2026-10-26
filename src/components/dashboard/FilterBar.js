"use client";
import { Search, X, SlidersHorizontal, ArrowUpDown, Globe, Video, Filter } from "lucide-react";
import { COUNTRIES, LANGUAGES, FORMATS } from "@/data/ads";
import styles from "./FilterBar.module.css";

export default function FilterBar({ filters, setFilters, onSearch }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  const handleQuickTag = (tag) => {
    if (tag === "winners") {
      setFilters((prev) => ({ ...prev, sortBy: "score", page: 1 }));
    } else if (tag === "video") {
      setFilters((prev) => ({ ...prev, format: "Video", page: 1 }));
    } else if (tag === "ecommerce") {
      setFilters((prev) => ({ ...prev, q: "E-commerce", page: 1 }));
    } else if (tag === "active") {
      setFilters((prev) => ({ ...prev, sortBy: "daysActive", page: 1 }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchRow}>
        <div className={styles.searchInputWrap}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar por gancho, anunciante, nicho ou CTA..."
            className={styles.searchInput}
            value={filters.q}
            onChange={(e) => handleChange("q", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
          />
          {filters.q && (
            <button
              onClick={() => handleChange("q", "")}
              className={styles.clearBtn}
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className={styles.platformPills}>
          <button
            className={`${styles.pill} ${filters.platform === "all" ? styles.pillActive : ""}`}
            onClick={() => handleChange("platform", "all")}
          >
            Todas Plataformas
          </button>
          <button
            className={`${styles.pill} ${filters.platform === "Meta" ? styles.pillActive : ""}`}
            onClick={() => handleChange("platform", "Meta")}
          >
            Meta Ads
          </button>
          <button
            className={`${styles.pill} ${filters.platform === "TikTok" ? styles.pillActive : ""}`}
            onClick={() => handleChange("platform", "TikTok")}
          >
            TikTok Ads
          </button>
        </div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.selectGroup}>
          <div className={styles.selectWrap}>
            <Video size={14} className={styles.selectIcon} />
            <select
              value={filters.format}
              onChange={(e) => handleChange("format", e.target.value)}
              className={styles.select}
            >
              <option value="all">Todos Formatos</option>
              {FORMATS.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div className={styles.selectWrap}>
            <Globe size={14} className={styles.selectIcon} />
            <select
              value={filters.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className={styles.select}
            >
              <option value="all">Todos os Paises</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.selectWrap}>
            <Filter size={14} className={styles.selectIcon} />
            <select
              value={filters.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className={styles.select}
            >
              <option value="all">Todos Idiomas</option>
              {LANGUAGES.slice(0, 4).map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>

          <div className={styles.selectWrap}>
            <ArrowUpDown size={14} className={styles.selectIcon} />
            <select
              value={filters.sortBy}
              onChange={(e) => handleChange("sortBy", e.target.value)}
              className={styles.select}
            >
              <option value="score">Score de Vencedor</option>
              <option value="daysActive">Mais Tempo no Ar</option>
              <option value="likes">Maior Engajamento</option>
            </select>
          </div>
        </div>

        <div className={styles.quickTags}>
          <button onClick={() => handleQuickTag("winners")} className={styles.tagBtn}>
            ?? Top Vencedores
          </button>
          <button onClick={() => handleQuickTag("video")} className={styles.tagBtn}>
            ?? Video Ads
          </button>
          <button onClick={() => handleQuickTag("active")} className={styles.tagBtn}>
            ? Escala Longa (Dias)
          </button>
        </div>
      </div>
    </div>
  );
}
