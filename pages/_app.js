/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
     // src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js" 
      src="https://sdk.mercadopago.com/js/v2"
      strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}
