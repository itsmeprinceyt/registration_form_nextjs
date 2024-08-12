import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Responsive Registration Form - ItsMe Prince",
  description: "A modern and fully responsive registration form built with Next.js and Tailwind CSS, featuring a sleek UI and smooth user experience.",
  icons: {
    icon: "/contact-form.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${inter.className} bg-gradient-to-r from-neutral-900 to-zinc-800`}
      >
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
