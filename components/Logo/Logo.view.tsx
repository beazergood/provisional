import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Logo({ variants }: any) {
  return (
    <motion.h1
      style={{ textAlign: 'center', display: 'block' }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        {'🏌🏻‍♂️'}
        {'Provisional'}
      </Text>
    </motion.h1>
  )
}
