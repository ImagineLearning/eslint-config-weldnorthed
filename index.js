module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'react-app',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'prettier/react',
	],
	plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier'],
	rules: {
		// Favor interface declarations over type aliases (see https://ncjamieson.com/prefer-interfaces/).
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

		// Favor implicit function return types. Keeps code cleaner, while IDEs can still provide all the typing information.
		'@typescript-eslint/explicit-function-return-type': 'off',

		// Similarly to @typescript-eslint/explicit-function-return-type, favor implicit return types.
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// Require consistent member declaration order.
		'@typescript-eslint/member-ordering': 'error',

		// Enforce consistent naming conventions.
		'@typescript-eslint/naming-convention': [
			'error',
			{ selector: 'default', format: ['camelCase'] },
			// Allow PascalCase for React function components
			{ selector: 'function', format: ['camelCase', 'PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] },
			{ selector: 'enumMember', format: ['PascalCase'] },
			{
				selector: 'variable',
				modifiers: ['const'],
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			},
			// Ignore unused parameters, to allow the convention of using `_` for an unused parameter.
			{
				selector: 'parameter',
				modifiers: ['unused'],
				format: null,
			},
			{
				selector: ['objectLiteralProperty', 'parameter', 'typeProperty'],
				filter: 'Component',
				format: ['PascalCase'],
			},
			// Allow `__html` for using `dangerouslySetInnerHTML` in React
			{
				selector: 'objectLiteralProperty',
				filter: '__html',
				format: null,
			},
		],

		// TypeScript that uses `any` is just JavaScript. Don't do it.
		'@typescript-eslint/no-explicit-any': 'error',

		// Type inference is preferred.
		'@typescript-eslint/no-inferrable-types': 'off',

		// Namespaces are considered outdated. ES2015 module syntax is preferred.
		'@typescript-eslint/no-namespace': 'error',

		// Disallow variable declarations from shadowing variables declared in the outer scope.
		'@typescript-eslint/no-shadow': 'error',

		// Disabled in favor of the @typescript-eslint/naming-convention rule.
		camelcase: 'off',

		// Always surround block with curly braces. Omitting curly braces can lead to bugs and reduce code clarity.
		curly: 'error',

		// Disabled in favor of the rules from plugin:import/typescript
		'import/no-extraneous-dependencies': 'off',

		// Disabled in favor of the rules from plugin:import/typescript
		'import/no-unresolved': 'off',

		// Exclude file extension when importing code files (.js, .jsx, .ts, or .tsx).
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],

		// Override Airbnb default: https://github.com/airbnb/javascript#modules--prefer-default-export
		// Named exports are often preferable since they provide more clarity as to what is being exported.
		// The Palmer Group Guidelines (https://github.com/formium/typescript#exports) suggest always using named exports.
		'import/prefer-default-export': 'off',

		// Allow deliberate console logging via `.info`, `.warn`, and `.error`.
		'no-console': [
			'error',
			{
				allow: ['info', 'warn', 'error'],
			},
		],

		// Allow for hard tabs for indentation + space for alignment.
		// Prettier should handle all indentation though.
		'no-mixed-spaces-and-tabs': 'off',

		// Don't allow mutating function parameters, with the exception of parameters named `state`
		// which would be used in reducers created with Redux Toolkit. Toolkit uses Immer, which
		// makes mutating the parameter object safe.
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],

		// Disabled in favor of @typescript-eslint/no-shadow
		'no-shadow': 'off',

		// Avoid certain imports, such as loading the entire RxJS library.
		'no-restricted-imports': ['error', 'rxjs/Rx'],

		// Enforce Prettier's formatting rules.
		'prettier/prettier': 'error',

		// Only allow JSX in JavaScript, Markdown, and TypeScript files with the `x` suffix.
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.mdx', '.tsx'],
			},
		],

		// Prop spreading can be useful in React, particularly with HOCs.
		'react/jsx-props-no-spreading': 'off',

		// Prop types can be excluded when using TypeScript, since it will already enforce types.
		'react/prop-types': 'off',

		// Don't require a space before a comment when designating a comment block with:
		//====
		//----
		// or
		//****
		'spaced-comment': [
			'error',
			'always',
			{
				exceptions: ['=', '-', '*'],
			},
		],
	},
	overrides: [
		{
			files: '**/*.{ts,tsx}',
			rules: {
				// Use nullish coalescing operator instead of logical chaining.
				// Logical OR (||) can sometimes cause the wrong value to be assigned, if the left-hand expression is falsy.
				'@typescript-eslint/prefer-nullish-coalescing': 'error',

				// Prefer using concise optional chain expressions instead of chained logical ANDs (&&).
				'@typescript-eslint/prefer-optional-chain': 'error',
			},
		},
		{
			files: ['**/*.{mock,spec,stories,test}.{js,jsx,ts,tsx}', '**/mocks.{js,jsx,ts,tsx}'],
			rules: {
				// Same rules as above, but also allows function parameters to be named `Story` or
				// `StoryComponent` when used in Storybook stories.
				'@typescript-eslint/naming-convention': [
					'error',
					{ selector: 'default', format: ['camelCase'] },
					{ selector: 'function', format: ['camelCase', 'PascalCase'] },
					{ selector: 'typeLike', format: ['PascalCase'] },
					{ selector: 'enumMember', format: ['PascalCase'] },
					{
						selector: 'variable',
						modifiers: ['const'],
						format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
					},
					{
						selector: 'parameter',
						modifiers: ['unused'],
						format: null,
					},
					{
						selector: ['objectLiteralProperty', 'parameter', 'typeProperty'],
						filter: 'Component',
						format: ['PascalCase'],
					},
					{
						selector: 'objectLiteralProperty',
						filter: '__html',
						format: null,
					},
					{
						selector: 'parameter',
						filter: 'Story(Component)?',
						format: ['PascalCase'],
					},
				],

				// Allow empty functions for mocks or stories.
				'@typescript-eslint/no-empty-function': 'off',

				// Allow use of `require` statements for Storybook configuration.
				'@typescript-eslint/no-var-requires': 'off',

				// Allow console logging in tests and stories.
				'no-console': 'off',
			},
		},
	],
};
