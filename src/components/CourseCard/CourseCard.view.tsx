import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  Stack,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition'

export interface CourseCardProps {
  name?: string
  city?: string
  state?: string
  imgUrl?: string
  rating?: string
  variant: string
}

export default function CourseCard({
  name,
  city,
  state,
  imgUrl,
  rating = '5',
}: CourseCardProps) {
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue('brand.100', 'brand.600')
  
  return (
    <Card maxW="sm" my="4" bg={bg} >
      <Image src={imgUrl} alt={name} borderRadius="lg" />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>
            {city}, {state}
          </Text>
          <Text color="blue.600" fontSize="2xl" onClick={onToggle}>
            {rating}
          </Text>
        </Stack>
      </CardBody>
      <Collapse in={isOpen} animateOpacity={true}>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Rate
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Hate
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Collapse>
    </Card>
  )
}
