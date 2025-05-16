import type { Metadata } from "next"
import { Phudu } from "next/font/google"
import "./globals.css"

const PhuduFont = Phudu({
    variable: "--font-phudu",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "The Joy Box",
    description: "Tỏ vẹn tâm ý kết giao vững bền",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <link rel="icon" type="image/svg+xml" href="images/favicon.png" />
            <body className={`${PhuduFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
