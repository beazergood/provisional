import { mode } from '@chakra-ui/theme-tools'

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#e2fde4',
    100: '#b9f5bc',
    200: '#8fed92',
    300: '#65e668',
    400: '#3adf3e',
    500: '#20c524',
    600: '#16991a',
    700: '#0c6e11',
    800: '#034307',
    900: '#001800',
  },
}

// const styles = {
//   global: (props: Record<string, any>) => ({
//     body: {
//       bg: mode(colors.brand[50], colors.brand[100])(props),
//       color: mode('#006d77', '#fff')(props),
//     },
//   }),
// }

// 2.2 extend base components
const components = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: 'bold', // Normally, it is "semibold"
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    // 3. We can add a new visual variant
    variants: {
      'with-shadow': {
        bg: 'red.400',
        boxShadow: '0 0 2px 2px #efdfde',
      },
      // 4. We can override existing variants
      solid: (props: StyleFunctionProps) => ({
        bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
      }),
      // 5. We can add responsive variants
      sm: {
        bg: 'teal.500',
        fontSize: 'md',
      },
    },
    // 6. We can overwrite defaultProps
    defaultProps: {
      size: 'lg', // default is md
      variant: 'sm', // default is solid
      colorScheme: 'green', // default is gray
    },
  }
}

// 3. extend the theme
const theme = extendTheme({ config, colors, components })

export default theme
