import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  HStack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, SettingsIcon } from '@chakra-ui/icons'
import {
  useSession,
  useSupabaseClient,
  Session,
} from '@supabase/auth-helpers-react'

import { Database } from '../../utils/database.types'

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
  // const { isOpen, onOpen, onClose } = useDisclosure()
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

          <NavLink key="courses" url="/">
            Courses
          </NavLink>

          <Flex alignItems={'center'}>
            <HStack spacing={7}>
              <IconButton
                aria-label="toggle color mode"
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              />

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
                <Link href="/account">
					<SettingsIcon />
				</Link>
              )}
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
