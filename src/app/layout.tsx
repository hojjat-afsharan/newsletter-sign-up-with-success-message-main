import "../../styles/global.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
