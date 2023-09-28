import "../../styles/global.css";
import styles from "./page.module.scss";

export const metadata = {
  title: "Newsletter sign up",
  description: "first frontend challenge from Frontend Mentor website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.red}> {children}</main>
      </body>
    </html>
  );
}
