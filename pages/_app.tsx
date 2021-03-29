import 'styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components';

const theme = {
  ...defaultTheme
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
