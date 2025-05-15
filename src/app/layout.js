import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Script from 'next/script'
import Body from '@/components/common/Body'


export default function RootLayout(props) {
  return (
    <html lang="en">
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
          <Header />
          {props.children}
          <Footer />

        </Body>
      </StyledComponentsRegistry>
    </html>
  )
}

