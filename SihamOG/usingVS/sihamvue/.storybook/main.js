module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/preset-scss",
			options: {
				cssLoaderOptions: {
					url: false,
				},
			},
		},
	],
	framework: "@storybook/vue3",
	core: {
		builder: "@storybook/builder-webpack5",
	}
};