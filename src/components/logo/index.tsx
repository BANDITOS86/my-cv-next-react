import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.svg";
import styles from "../logo/logo.module.scss"

const Logo = () => {
  return (
    <Link className={styles.logo__link} href="/">
      <Image className={styles.logo} src={logo} width={85} height={40} alt="Логотип" priority />
    </Link>
  );
};

export default Logo;
