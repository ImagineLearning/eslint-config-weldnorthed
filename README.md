# eslint-config-weldnorthed

This package includes the shareable ESLint configuration used by the [Weld North Education](https://www.weldnortheducation.com/) engineering team for React projects written in TypeScript.

It extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) configurations, and uses the [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), and [prettier](https://github.com/prettier/eslint-plugin-prettier) plugins.

## Installation

This package requires `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `eslint-config-airbnb`, `eslint-config-prettier`, `eslint-plugin-prettier`, and `prettier` as peer dependencies.

Additionally, if you are not using this with [Create React App](https://github.com/facebook/create-react-app), it requires `babel-eslint`, `eslint-config-react-app`, `eslint-plugin-flowtype`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, and `eslint-plugin-react-hooks` (these are already installed with `react-scripts`).

You can list the correct versions of each package to install with the command:

```bash
npm info eslint-config-weldnorthed@latest peerDependencies

# or

yarn info eslint-config-weldnorthed@latest peerDependencies
```

Then install the appropriate versions manually.

Alternatively, if using **npm 5+**, you can use the command:

```bash
npx install-peerdeps --dev eslint-config-weldnorthed
```

This will install all of the peer dependencies as dev dependencies in your project.
If using **Yarn**, the above command will detect it and install the dependencies using Yarn.

Note: If using the `install-peerdeps` utility describe above in a project bootstrapped with Create React App, be sure to delete `babel-eslint`, `eslint-config-react-app`, `eslint-plugin-flowtype`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, and `eslint-plugin-react-hooks` from your `package.json` file. Otherwise, `react-scripts` may complain about incompatible versions.

## Usage

Create a `.eslintrc` file in your project's root directory with the following contents:

```json
{
	"extends": ["weldnorthed"],
	"parserOptions": {
		"project": "./tsconfig.json"
	},
	"rules": {}
}
```

Note: Because this configuration uses the [@typescript-eslint/prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md) rule, it requires a value for the `"parserOptions.project"` property that points to your project's `tsconfig.json` file.

## Additional configuration

Refer to the [ESLint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
