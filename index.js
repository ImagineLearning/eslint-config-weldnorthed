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
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/member-ordering': 'error',
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
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
			},
		],
		camelcase: 'off',
		curly: 'error',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
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
		'import/prefer-default-export': 'off',
		'no-console': [
			'error',
			{
				allow: ['info', 'warn', 'error'],
			},
		],
		'no-mixed-spaces-and-tabs': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],
		'no-shadow': 'off',
		'no-restricted-imports': ['error', 'rxjs/Rx'],
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.mdx', '.tsx'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
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
				'@typescript-eslint/prefer-nullish-coalescing': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
			},
		},
		{
			files: ['**/*.{mock,spec,stories,test}.{js,jsx,ts,tsx}', '**/mocks.{js,jsx,ts,tsx}'],
			rules: {
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
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'no-console': 'off',
			},
		},
	],
};
