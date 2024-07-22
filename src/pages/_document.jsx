import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth bg-white antialiased" lang="no">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/six0oik.css"
        ></link>
        <link rel="icon" href="/images/logo-large.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
