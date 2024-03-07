import styles from "./page.module.css";
import BasicSelect from "@/components/select";
import BasicTable from "./table/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <BasicSelect />
      </div>

      <div className={styles.center}>
        <BasicTable />
      </div>
    </main>
  );
}
