
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GalleryPage from "@/components/GalleryPage/GalleryPage";

export const metadata = {
  title:
    "ചിത്രശാല | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിന്റെ ചിത്രശാല. കിഴുർ, പയ്യോളി, കോഴിക്കോട്.",
};

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main>
        <GalleryPage />
      </main>

      <Footer />
    </>
  );
}
