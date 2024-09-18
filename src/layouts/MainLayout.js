import Head from "next/head"
import '..styles/globals.css'

export const metadata = {
  title: 'Veronica Rosén | Frontend Developer Portfolio',
  description: 'Frontend developer student skilled in HTML, CSS, JavaScript and React.'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }