import "./globals.css";
import { Roboto } from "next/font/google";
import ReduxProvider from "@/ruoter/Providers";

export const metadata = {
    title: "Voca Game",
    description: "Generated by create next app",
};

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "300", "400", "500", "700"],
    variable: "--font-roboto",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} h-screen`}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
