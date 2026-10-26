import { BRANDS } from "@/data/ads";
import styles from "./BrandTicker.module.css";

export default function BrandTicker() {
  const doubled = [...BRANDS, ...BRANDS];
  return (
    <section className={styles.section}>
      <div className={`container text-center`}>
        <p className={styles.label}>Marcas monitoradas diariamente dentro da plataforma</p>
      </div>
      <div className={styles.ticker}>
        <div className={styles.track}>
          {doubled.map((brand, i) => (
            <div key={i} className={styles.brand}>{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
