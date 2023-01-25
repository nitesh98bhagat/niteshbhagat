import { useRouter } from "next/router";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showFooter = router.pathname === "/" ? true : false;

  return (
    <div className="  w-full min-h-screen ">
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </div>
  );
}

export default MyApp;
