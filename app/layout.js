import { Anek_Malayalam } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const anekMalayalam = Anek_Malayalam({
  subsets: ["malayalam", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anek",
  display: "swap",
});

export const metadata = {
  title: "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം, കിഴുർ, പയ്യോളി, കോഴിക്കോട്.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ml">
      <body className={anekMalayalam.variable}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
