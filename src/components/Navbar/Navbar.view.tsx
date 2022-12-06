import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { useSession, useSupabaseClient, Session } from '@supabase/auth-helpers-react'

import { Logo } from '../Logo/Logo.view'

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={url}
  >
    {children}
  </Link>
)

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const session: Session | null = useSession()
  const supabase = useSupabaseClient<Database>()
  const onSignOut = () => {
    console.log('signing out...')
    supabase.auth.signOut()
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo />

          {/* <NavLink key="courses" url="/">
            Courses
          </NavLink>
           */}

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* FIX ME */}
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              {session ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={
                          'https://avatars.dicebear.com/api/male/username.svg'
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>
                      <Link href="/account">Account Settings</Link>
                    </MenuItem>
                    <MenuItem>
                      <Button onClick={onSignOut}>Logout</Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Link href="/account">Login</Link>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
