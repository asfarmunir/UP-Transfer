import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

// import { Toaster } from "react-hot-toast";
// import AuthSessionProvider from "@/lib/AuthSession";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: " UP Transfer",
  description:
    "UP Transfer is a platform that allows you to transfer files between devices without the need for an internet connection.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} ${ubuntu.variable}`}>
        <NextTopLoader
          color="pink"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          showSpinner={false}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 5px #2299DD,0 0 5px #2299DD"
        />
        {children}
        {/* <Toaster position="bottom-center" /> */}
      </body>
    </html>
  );
}
