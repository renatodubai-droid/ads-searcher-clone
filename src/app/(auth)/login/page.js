"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("usuario@adsearcher.pro");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Erro ao entrar.");
      }

      // Store simulated token/user
      if (typeof window !== "undefined") {
        localStorage.setItem("adsearcher_user", JSON.stringify(data.user));
      }
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Bem-vindo de volta"
      subtitle="Entre pra continuar espionando os criativos vencedores."
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <div className={styles.errorBox}>{error}</div>}

        <div className="input-group">
          <label className="input-label">E-mail</label>
          <div className={styles.inputWrap}>
            <Mail size={16} className={styles.inputIcon} />
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className={`input ${styles.inputWithIcon}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <div className={styles.passwordHeader}>
            <label className="input-label">Senha</label>
            <a href="#" className={styles.forgotLink}>
              Esqueceu a senha?
            </a>
          </div>
          <div className={styles.inputWrap}>
            <Lock size={16} className={styles.inputIcon} />
            <input
              type="password"
              required
              placeholder="••••••••"
              className={`input ${styles.inputWithIcon}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
          {loading ? (
            <>
              <Loader2 size={18} className={styles.spinner} /> Entrando...
            </>
          ) : (
            <>
              Entrar na plataforma <ArrowRight size={18} />
            </>
          )}
        </button>

        <div className={styles.footerNote}>
          Ainda nao tem conta?{" "}
          <Link href="/register" className={styles.link}>
            Cadastre-se gratis
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
