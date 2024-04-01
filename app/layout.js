import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import { StoreProvider } from "../src/redux/storeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Десертная сказка",
  description: "Лучшая кондитерская в Воронеже",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header/>
          <main className={"root"}>{children}</main>
          <Footer/>
        </StoreProvider>
        </body>
    </html>
  );
}
