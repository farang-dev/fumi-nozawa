// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* You can add additional meta tags, links to fonts, etc., here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
