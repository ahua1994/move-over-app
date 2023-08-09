import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";
import AppContextProvider from "./contexts/AppContext";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Move Over",
    description: "Never Look Back.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body className={inter.className}>
                <AuthContextProvider>
                    <AppContextProvider>
                        <ToastContainer />
                        <Navbar />
                        {children}
                    </AppContextProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}
