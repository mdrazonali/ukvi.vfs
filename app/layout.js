import "./globals.css";

export const metadata = {
  title: "VFS Global - TrackStatus",
  description: "Track your application and passport status",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
