import { ThemeProvider } from "../contexts/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
