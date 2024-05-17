import styles from "./Layout.module.css";
import React from "react";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return <div className={styles.background}>{children}</div>;
};

export default Layout;
