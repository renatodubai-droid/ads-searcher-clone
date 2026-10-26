"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ArrowRight, Loader2, Check } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setError("Voce precisa aceitar os termos de uso.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Erro ao registrar conta.");
      }

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
      title="Criar sua conta gratis"
      subtitle="Cadastro em 30 segundos. Assine um plano dentro da plataforma quando quiser usar as ferramentas."
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <div className={styles.errorBox}>{error}</div>}

        <div className="input-group">
          <label className="input-label">Nome completo</label>
          <div className={styles.inputWrap}>
            <User size={16} className={styles.inputIcon} />
            <input
              type="text"
              required
              placeholder="Seu nome"
              className={`input ${styles.inputWithIcon}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

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
          <label className="input-label">Senha</label>
          <div className={styles.inputWrap}>
            <Lock size={16} className={styles.inputIcon} />
            <input
              type="password"
              required
              placeholder="Minimo 8 caracteres"
              className={`input ${styles.inputWithIcon}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}>
            {agreed && <Check size={12} />}
          </span>
          <span className={styles.checkboxText}>
            Concordo com os <a href="#">Termos de Uso</a> e a <a href="#">Politica de Privacidade</a>.
          </span>
        </label>

        <button type="submit" disabled={loading} className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
          {loading ? (
            <>
              <Loader2 size={18} className={styles.spinner} /> Criando conta...
            </>
          ) : (
            <>
              Criar conta gratis <ArrowRight size={18} />
            </>
          )}
        </button>

        <div className={styles.footerNote}>
          Ja tem conta?{" "}
          <Link href="/login" className={styles.link}>
            Entrar
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
