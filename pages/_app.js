// pages/_app.js
import "@/styles/globals.css"; // Ensure your global styles are properly set up
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
