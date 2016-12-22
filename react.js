'use strict';

module.exports = {
  "rules": {

    /**
     * React style
     */
    "react/display-name": 0,              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/no-danger": 2,                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-danger-with-children": 2,   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    "react/no-did-mount-set-state": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-update-set-state": 2,   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-direct-mutation-state": 2,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-multi-comp": [2, {          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
      "ignoreStateless": true
    }],
    "react/no-render-return-value": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    "react/no-string-refs": 2,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    "react/no-unknown-property": 2,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/prefer-es6-class": 2,          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-stateless-function": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prop-types": 2,                // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/react-in-jsx-scope": 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/require-render-return": 2,     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    "react/self-closing-comp": 2,         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/sort-comp": [2, {              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      "order": [
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],

    /**
     * JSX style
     */
    "react/jsx-boolean-value": 2,                       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-closing-bracket-location": 2,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-curly-spacing": [2, "never"],            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-equals-spacing": [2, "never"],           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-first-prop-new-line": [2, "multiline"],  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-indent-props": [2, 2],                   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent": [2, 2],                         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-key": 2,                                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    "react/jsx-no-comment-textnodes": 2,                // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    "react/jsx-no-duplicate-props": 2,                  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-undef": 2,                            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-pascal-case": 2,                         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    "react/jsx-space-before-closing": [2, "always"],    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    "react/jsx-uses-react": 2,                          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-vars": 2,                           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-wrap-multilines": 2,                     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "expect": true,
    "faker": true,
    "sandbox": true,
    "shallow": true,
    "stub": true,
    "spy": true,
    "apiRequest": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "extends": "eslint-config-smashing-boxes/defaults"
}
