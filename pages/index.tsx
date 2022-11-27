import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import {
  useSession,
  useSupabaseClient,
  Session,
} from '@supabase/auth-helpers-react'
import { Flex, Stack, Text } from '@chakra-ui/react'

import AccountContainer from '../viewModels/AccountContainer.viewModel'
import Logo from '../components/Logo/Logo.view'

export default function Home() {
  const session: Session | null = useSession()
  const supabase = useSupabaseClient()
  
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={'column'}
      >
        <Logo />
        {!session ? (
          <>
            <Stack spacing={1}>
              <Text as="b" fontSize="xl" textAlign="center">
                {"Track courses you've played."}
              </Text>
              <Text as="b" fontSize="xl" textAlign="center">
                {'Save ones you want to play.'}
              </Text>
              <Text as="b" fontSize="xl" textAlign="center">
                {"Tell your friends where's good."}
              </Text>
            </Stack>

            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </>
        ) : (
          <>
            <AccountContainer session={session} />
          </>
        )}
      </Flex>

          </>
  )
}
