'use strict';

module.exports = {
  "rules": {

    /**
     * React style
     */
    "react/display-name": "off",                              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/no-danger": "error",                               // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-danger-with-children": "error",                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    "react/no-did-mount-set-state": "error",                  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-update-set-state": "error",                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-direct-mutation-state": "error",                // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-multi-comp": ["error", {                        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
      "ignoreStateless": true
    }],
    "react/no-render-return-value": "error",                  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    "react/no-string-refs": "error",                          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    "react/no-unknown-property": "error",                     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/prefer-es6-class": "error",                        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-stateless-function": "error",               // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prop-types": "error",                              // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/react-in-jsx-scope": "error",                      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/require-render-return": "error",                   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    "react/self-closing-comp": "error",                       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/sort-comp": ["error", {                            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
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
    "react/jsx-boolean-value": "error",                       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-closing-bracket-location": "error",            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-curly-spacing": ["error", "never"],            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-equals-spacing": ["error", "never"],           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-first-prop-new-line": ["error", "multiline"],  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-indent-props": [2, 2],                         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent": [2, 2],                               // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-key": "error",                                 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    "react/jsx-no-comment-textnodes": "error",                // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    "react/jsx-no-duplicate-props": "error",                  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-undef": "error",                            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-pascal-case": "error",                         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    "react/jsx-sort-props": ["error", {                       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
      "callbacksLast": true,
      "ignoreCase": true,
      "reservedFirst": true
    }],
    "react/jsx-space-before-closing": ["error", "always"],    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    "react/jsx-uses-react": "error",                          // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-vars":"error",                            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-wrap-multilines": "error",                     // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
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
