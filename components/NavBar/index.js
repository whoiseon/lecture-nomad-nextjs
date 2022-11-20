import Link from "next/link";
import {useRouter} from "next/router";
import styles from './styles.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>

    </nav>
  );
};
