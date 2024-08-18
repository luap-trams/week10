import { Inter } from "next/font/google";
import "./globals.css"
import Footer from './components/Footer';
import Navibar from "./components/Navibar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create a Movie App",
  description: "A movie application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navibar/>
        <div className="min-h-screen">
        
        {children}
        </div>

        <Footer />
        </body>
    </html>
  );
}
