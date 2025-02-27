import "@/styles/globals.css"; // Ensure your global styles are properly set up
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useEffect } from "react"; // Import useEffect for side effects

export default function App({ Component, pageProps }) {
  // Use useEffect to inject the Typebot script
  useEffect(() => {
    // Dynamically inject the Typebot script
    
    const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";
typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'

Typebot.initBubble({
  typebot: "web-gen-chatbot-oo0o2ae",
  previewMessage: { message: "Any questions? " },
  theme: {
    button: { backgroundColor: "#0042DA", size: "large" },
    previewMessage: { backgroundColor: "#FFFFFF" },
  },
});
`;
document.body.append(typebotInitScript);
    

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(typebotInitScript);
    };
  }, []); // Empty dependency array ensures this runs only once

  // Render the component with its props
  return <Component {...pageProps} />;
}