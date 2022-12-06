import supabase from '../utils/supabase'
import { motion } from 'framer-motion'
import {
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import CourseCard from '../components/CourseCard/CourseCard.view'

const randomImage = () => {
  const imageUrls = [
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/awbrey_glen_golf_club-bend-2.jpeg?t=2022-11-27T20%3A25%3A34.733Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/awbrey_glen_golf_club-bend.jpg',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/bend-gcc.jpg',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/brasada_ranch.jpg',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/broken_top-bend.jpg?t=2022-11-27T20%3A31%3A05.210Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/crosswater.jpg?t=2022-11-27T20%3A31%3A14.691Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/juniper.jpg?t=2022-11-27T20%3A31%3A24.574Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/lost-tracks-golf-club-960.jpeg?t=2022-11-27T20%3A31%3A28.741Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/meadows-crosswater-oregon-usa.jpg?t=2022-11-27T20%3A31%3A37.875Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/rivers-edge-golf-course-bend-oregon.jpg?t=2022-11-27T20%3A31%3A44.007Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/tetherow-bend-or.jpg?t=2022-11-27T20%3A31%3A49.491Z',
    'https://pkhxqaswjgkmqqioqaba.supabase.co/storage/v1/object/public/images/oregon/widgi-creek.jpg?t=2022-11-27T20%3A32%3A33.306Z',
  ]
  return imageUrls[Math.floor(Math.random() * imageUrls.length)]
}

export async function getServerSideProps() {
  const { data } = await supabase.from('oregon-seed-data').select()

  return {
    props: {
      data,
    },
  }
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0 },
}

const logoVariants = {
  hidden: { opacity: 0, x: -400, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
}

export default function Courses({ data }: { data: any }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('brand.100', 'brand.600')
  
  const coursesList = data.map((course: any) => {
    return (
      <motion.div
        variants={item}
        style={{ margin: '5px auto' }}
        key={course.id}
      >
        {course && (
          <CourseCard
            name={course.name}
            city={course.city}
            state={course.state}
            imgUrl={randomImage()}
            variant={colorMode}
          />
        )}
      </motion.div>
    )
  })

  return (
    
      <Flex direction={'column'} alignItems={'center'}>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          className=""
        >

          <motion.ul variants={container} initial="hidden" animate="show">
            {coursesList}
          </motion.ul>
        </motion.main>
      </Flex>
  )
}
