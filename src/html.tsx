import React from 'react'

const FONTS = {
  regular: '/fonts/gregular.woff2',
  bold: '/fonts/gbold.woff2',
  sans: '/fonts/gsans.woff2'
}

const WEBFONTS = `
@font-face {
  font-family: 'GaeFont';
  src: url('${FONTS.regular}') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GaeFont';
  src: url('${FONTS.bold}') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GaeFont Sans';
  src: url('${FONTS.sans}') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
`
  // strip linebreaks
  .replace(/[\n\r]+ */g, ' ')

const GREETING = `/*

🇮🇹

Hey astronaut. This website is built using Gatsby, Styled Components & TypeScript.
You can view the raw soure code at https://github.com/gaebar/gaetanobarreca.dev :)

*/`

const HTML: React.FunctionComponent<{
  htmlAttributes: any
  headComponents: any
  preBodyComponents: any
  body: any
  bodyAttributes: any
  postBodyComponents: any
}> = ({
  htmlAttributes,
  headComponents,
  preBodyComponents,
  body,
  bodyAttributes,
  postBodyComponents
}) => (
  <html lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Gaetano Barreca</title>
      <meta name="description" content="Full-Stack Software Engineer" />
      <meta property="og:image" content="/favicons/social.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <link
        rel="preload"
        href={FONTS.regular}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={FONTS.bold}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={FONTS.sans}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <meta name="theme-color" content="#101722" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <style
        dangerouslySetInnerHTML={{
          __html: WEBFONTS
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: GREETING
        }}
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
)

export default HTML
