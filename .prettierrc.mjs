/** @type {import("prettier").Config} */

/**
* Biome has only partial support for astro (can only check frontmatter)
* We use prettier to prettify and format astro
**/

export default {
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
				useTabs: true,
				semi: true,
				tabWidth: 2,
			},
		},
	],
};
