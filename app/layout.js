import {Header} from "@/components/Header";
import "./globals.css";
import {Montserrat, Roboto_Condensed} from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
});

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-roboto-condensed",
});

const novecento = localFont({
    src: "../public/Novecento_sans_narrow_Light.otf",
    variable: "--font-novecento",
});

export default function RootLayout({children}) {
    return (
        <html lang="en"
              className={`${montserrat.variable} ${robotoCondensed.variable} ${novecento.variable}`}>
        <body className={"font-robotoCondensed"}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
