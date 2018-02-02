# eslint-config-smashing-boxes [![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/eslint-config-smashing-boxes)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Smashing Boxes' JavaScript Style Guide

## Installation

```
npm install --save-dev eslint eslint-config-smashing-boxes
```

## Usage

Once the `eslint-config-smashing-boxes` package is installed, you can use it by specifying `smashing-boxes` or `eslint-config-smashing-boxes` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "smashing-boxes", // Or "eslint-config-smashing-boxes"
  "rules": {

    /**
     * Additional, per-project rules can go here.
     * These rules will override the rules in
     * "eslint-config-smashing-boxes"
     */

  }
}
```

### React

For usage in a React project you will need to install the `eslint-plugin-react`:

```
npm install --save-dev eslint-plugin-react
```

Change the `"extends"` value to `"extends": "smashing-boxes/react"` or `"extends": "eslint-config-smashing-boxes/react"`

```js
{
  "extends": "smashing-boxes/react", // Or "eslint-config-smashing-boxes/react"
  "rules": {

    /**
     * Additional, per-project rules can go here.
     * These rules will override the rules in
     * "eslint-config-smashing-boxes"
     */

```

## License

MIT
