import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Move Over",
    description: "Never Look Back.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <nav className="fixed w-full top-0 text-white flex justify-between">
                <Image
                    src="/moveoverlogo.png"
                    alt="Move Over Logo"
                    width="200"
                    height="150"
                ></Image>
                <div className="links flex mr-2">
                    <button className="start align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        Start A Move
                    </button>
                    <button className="mymoves align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        My Moves
                    </button>
                    <button className="about align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        About
                    </button>
                    <button className="register align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        Register
                    </button>
                    <button className="login align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        Login
                    </button>
                    <button className="logout align h-14 px-5 pb-1 mt-4 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        Logout
                    </button>
                </div>
            </nav>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
