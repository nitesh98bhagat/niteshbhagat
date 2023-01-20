import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" bg-zinc-900 w-full min-h-screen text-zinc-50">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
