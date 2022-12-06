import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { ChakraProvider} from '@chakra-ui/react'

import { Nav } from '../components/Navbar/Navbar.view'
import theme from '../theme'

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <Nav/>
          <Component {...pageProps} />
        </SessionContextProvider>
      </AnimatePresence>
     </ChakraProvider>
  )
}
export default MyApp
