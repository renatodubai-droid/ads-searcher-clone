"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import FilterBar from "@/components/dashboard/FilterBar";
import AdCard from "@/components/dashboard/AdCard";
import AdDetailModal from "@/components/dashboard/AdDetailModal";
import { Sparkles, Loader2, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAd, setSelectedAd] = useState(null);
  const [meta, setMeta] = useState({ total: 0, page: 1, totalPages: 1 });

  const [filters, setFilters] = useState({
    q: "",
    platform: "all",
    format: "all",
    country: "all",
    language: "all",
    sortBy: "score",
    page: 1,
    limit: 12,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("adsearcher_user");
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {}
      }
    }
  }, []);

  const fetchAds = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.q) params.set("q", filters.q);
      if (filters.platform !== "all") params.set("platform", filters.platform);
      if (filters.format !== "all") params.set("format", filters.format);
      if (filters.country !== "all") params.set("country", filters.country);
      if (filters.language !== "all") params.set("language", filters.language);
      params.set("sortBy", filters.sortBy);
      params.set("page", filters.page.toString());
      params.set("limit", filters.limit.toString());

      const res = await fetch(`/api/ads/search?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setAds(data.data);
        setMeta(data.meta);
      }
    } catch (err) {
      console.error("Erro ao buscar anuncios:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, [filters.platform, filters.format, filters.country, filters.language, filters.sortBy, filters.page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= meta.totalPages) {
      setFilters((prev) => ({ ...prev, page: newPage }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Sidebar user={user} />

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Biblioteca de Anuncios</h1>
            <p className={styles.subtitle}>
              Consulte 19.201 criativos indexados com metricas e analise cirurgica.
            </p>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.liveBadge}>
              <span className={styles.liveDot} />
              <span>Indexador ativo</span>
            </div>
          </div>
        </header>

        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onSearch={fetchAds}
        />

        <div className={styles.resultsInfo}>
          <div className={styles.resultsCount}>
            Mostrando <strong>{ads.length}</strong> de <strong>{meta.total}</strong> anuncios encontrados
          </div>
          {loading && (
            <div className={styles.loadingIndicator}>
              <Loader2 size={14} className={styles.spinner} />
              <span>Atualizando dados...</span>
            </div>
          )}
        </div>

        {loading && ads.length === 0 ? (
          <div className={styles.loadingState}>
            <Loader2 size={32} className={styles.spinner} />
            <p>Carregando anuncios vencedores...</p>
          </div>
        ) : ads.length === 0 ? (
          <div className={styles.emptyState}>
            <Sparkles size={40} className={styles.emptyIcon} />
            <h3>Nenhum anuncio encontrado</h3>
            <p>Tente ajustar os termos de busca ou remover alguns filtros.</p>
            <button
              onClick={() => setFilters({
                q: "",
                platform: "all",
                format: "all",
                country: "all",
                language: "all",
                sortBy: "score",
                page: 1,
                limit: 12,
              })}
              className="btn btn-secondary btn-sm"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {ads.map((ad) => (
              <AdCard
                key={ad.id}
                ad={ad}
                onOpenDetail={(targetAd) => setSelectedAd(targetAd)}
              />
            ))}
          </div>
        )}

        {meta.totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              disabled={meta.page <= 1}
              onClick={() => handlePageChange(meta.page - 1)}
              className={styles.pageBtn}
            >
              <ChevronLeft size={16} /> Anterior
            </button>
            <span className={styles.pageInfo}>
              Pagina {meta.page} de {meta.totalPages}
            </span>
            <button
              disabled={meta.page >= meta.totalPages}
              onClick={() => handlePageChange(meta.page + 1)}
              className={styles.pageBtn}
            >
              Proxima <ChevronRight size={16} />
            </button>
          </div>
        )}

        {selectedAd && (
          <AdDetailModal
            ad={selectedAd}
            onClose={() => setSelectedAd(null)}
          />
        )}
      </main>
    </div>
  );
}
