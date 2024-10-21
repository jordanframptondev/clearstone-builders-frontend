import {Header} from "@/components/Header";
import "./globals.css";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
});

export default function RootLayout({children}) {
    return (
        <html lang="en"
              className={`${montserrat.variable}`}>
        <body className={"font-montserrat"}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
