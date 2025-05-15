import StyledComponentsRegistry from '@/lib/registry'
import Script from 'next/script'
import Body from '@/components/common/Body'


export default function RootLayout(props) {
  return (
    <html lang="en">
      <meta property="og:title" content="Advensecret"></meta>
      <meta property="og:description" content="Answer a few fun questions, and we’ll design a one of a kind surprise journey, perfectly crafted to your vibe. No stress, no spoilers, just pure adventure."></meta>
      <meta property="og:image" content="https://advensecret.nexipros.com/top-section.jpg"></meta>
      <meta property="og:image:width" content="736"></meta>
      <meta property="og:image:height" content="920"></meta>
      <meta property="og:url" content="https://advensecret.nexipros.com"></meta>
      <meta property="og:site_name" content="Advensecret"></meta>
      <meta property="og:type" content="website"></meta>
      <link rel="alternate" href="https://advensecret.nexipros.com/blog-feed.xml" type="application/rss+xml" title="Advensecret - RSS"></link>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content="Advensecret"></meta>
      <meta name="twitter:description" content="Answer a few fun questions, and we’ll design a one of a kind surprise journey, perfectly crafted to your vibe. No stress, no spoilers, just pure adventure."></meta>
      <meta name="twitter:image" content="https://advensecret.nexipros.com/top-section.jpg"></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#00aeef"></link>
      <meta name="msapplication-TileColor" content="#003179"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <Script src="//embed.typeform.com/next/embed.js"></Script>
      <StyledComponentsRegistry>
        <Body >
          {props.children}
        </Body>
      </StyledComponentsRegistry>
    </html>
  )
}

