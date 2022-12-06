import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import {
  useSession,
  useSupabaseClient,
  Session,
} from '@supabase/auth-helpers-react'
import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  StackDivider,
  Stack
} from '@chakra-ui/react'

import AccountContainer from '../viewModels/AccountContainer.viewModel'

export default function Home() {
  const session: Session | null = useSession()
  const supabase = useSupabaseClient()

  return (
    
    <Box maxW="screen" minH="calc(100vh)" bg="brand.100" >
        <Container centerContent={true}>

        
        <Card maxW="md" my={'50px'}>
          <CardBody bg="">
            {session ? (
              <AccountContainer session={session} />
            ) : (
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="md" textAlign="center">
                    {"Track coureses you've played"}
                  </Heading>
                </Box>
                <Box>
                  <Heading size="md" textAlign="center">
                    {'Save ones you want to play.'}
                  </Heading>
                </Box>
                <Box>
                  <Heading size="md" textAlign="center">
                    {"Tell your friends where's good."}
                  </Heading>
                </Box>
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  theme="dark"
                />
              </Stack>
            )}
          </CardBody>
        </Card>
      </Container>
      </Box>
  )
}
