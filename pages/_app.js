// pages/_app.js
import "@/styles/globals.css"; // Ensure your global styles are properly set up

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
