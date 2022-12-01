import { mode } from "@chakra-ui/theme-tools";

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: mode("#a8dadc", "#006d77")(props),
      color: mode("#006d77", "#a8dadc")(props),
    },
  }),
};

// {"Dark Jungle Green":"181f1c","Kombu Green":"274029","Hunter Green":"315c2b","Dark Olive Green":"60712f","Citron":"9ea93f"}

const colors = {
    brand: {
      900: '#181f1c',
      800: '#274029',
      700: '#315c2b',
      600: '#60712f',
      500: '#9ea93f',
    },
  }
  
// 3. extend the theme
const theme = extendTheme({ styles, config, colors })

export default theme
