import { Inter, Poppins } from 'next/font/google'
import "./globals.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "SBX",
  description: "SBX Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
