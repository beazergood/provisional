module.exports = {
    "stories": [
        "../src/stories/**/*.stories.mdx",
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/components/**/*.stories.tsx"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@chakra-ui/storybook-addon"
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
}