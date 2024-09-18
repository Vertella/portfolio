import Head from "next/head"

export const metadata = {
  title: 'Veronica Rosén | Frontend Developer Portfolio',
  description: 'Frontend developer student skilled in HTML, CSS, JavaScript and React.'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Frontend developer student skilled in HTML, CSS, JavaScript, and React. Check out my projects and skills in web development." />
        <meta name="author" content="Veronica Rosén" />

        {/* Open Graph, FB, LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vertella.se/" />
        <meta property="og:title" content="Veronica Rosén | Frontend Developer Portfolio" />
        <meta property="og:description" content="Frontend developer student creating dynamic web applications with React and JavaScript." />
        <meta property="og:image" content="/images/portfolio.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vertella.se/" />
        <meta property="twitter:title" content="Veronica Rosén | Frontend Developer Portfolio" />
        <meta property="twitter:description" content="Frontend developer student creating dynamic web applications with React and JavaScript." />
        <meta property="twitter:image" content="/images/portfolio.png" />

        <title>Veronica Rosén | Frontend Developer Portfolio</title>


        </Head>
        <body>{children}</body>
      </html>
    )
  }