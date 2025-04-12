import type React from "react"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Using Heebo as it supports Hebrew characters well
const heebo = Heebo({ subsets: ["hebrew", "latin"] })

export const metadata: Metadata = {
  title: "KleinCode | דפי נחיתה מרהיבים",
  description: "בניית דפי נחיתה מרהיבים וממירים לפרסום, יצירת לידים ונוכחות מקוונת",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 