'use strict';

/**
 * 
 * The ESLint rules below are listed in the order they appear on the 
 * ESLint rule page (http://eslint.org/docs/rules/). All rules that
 * appear on the page are listed below as it will be easier to keep
 * in sync when new rules are added or old rules removed.
 * 
 */

module.exports = {
  "rules": {

    /**
     * Possible Errors
     * http://eslint.org/docs/rules/#possible-errors
     */
    "no-await-in-loop": "off",                                        // http://eslint.org/docs/rules/no-await-in-loop
    "no-cond-assign": ["error", "always"],                            // http://eslint.org/docs/rules/no-cond-assign
    "no-console": "warn",                                             // http://eslint.org/docs/rules/no-console
    "no-constant-condition": "warn",                                  // http://eslint.org/docs/rules/no-constant-condition
    "no-control-regex": "error",                                      // http://eslint.org/docs/rules/no-control-regex
    "no-debugger": "warn",                                            // http://eslint.org/docs/rules/no-debugger
    "no-dupe-args": "error",                                          // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-keys": "error",                                          // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": "error",                                     // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty-character-class": "error",                              // http://eslint.org/docs/rules/no-empty-character-class
    "no-empty": "error",                                              // http://eslint.org/docs/rules/no-empty
    "no-ex-assign": "error",                                          // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast": "off",                                   // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-parens": ["error", "functions"],                        // http://eslint.org/docs/rules/no-extra-parens
    "no-extra-semi": "error",                                         // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": "error",                                        // http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations": "error",                                 // http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp": "error",                                     // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": "error",                               // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-obj-calls": "error",                                          // http://eslint.org/docs/rules/no-obj-calls
    "no-prototype-builtins": "error",                                 // http://eslint.org/docs/rules/no-prototype-builtins
    "no-regex-spaces": "error",                                       // http://eslint.org/docs/rules/no-regex-spaces
    "no-sparse-arrays": "error",                                      // http://eslint.org/docs/rules/no-sparse-arrays
    "no-template-curly-in-string": "warn",                            // http://eslint.org/docs/rules/no-template-curly-in-string
    "no-unexpected-multiline": "error",                               // http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unreachable": "error",                                        // http://eslint.org/docs/rules/no-unreachable
    "no-unsafe-finally": "error",                                     // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-negation": "error",                                    // http://eslint.org/docs/rules/no-unsafe-negation
    "use-isnan": "error",                                             // http://eslint.org/docs/rules/use-isnan
    "valid-jsdoc": "off",                                             // http://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof": "error",                                          // http://eslint.org/docs/rules/valid-typeof

    /**
     * Best Practices
     * http://eslint.org/docs/rules/#best-practices
     */
    "accessor-pairs": "error",                                        // http://eslint.org/docs/rules/accessor-pairs
    "array-callback-return": "error",                                 // http://eslint.org/docs/rules/array-callback-return
    "block-scoped-var": "error",                                      // http://eslint.org/docs/rules/block-scoped-var
    "class-methods-use-this": "off",                                  // http://eslint.org/docs/rules/class-methods-use-this
    "complexity": "warn",                                             // http://eslint.org/docs/rules/complexity
    "consistent-return": "off",                                       // http://eslint.org/docs/rules/consistent-return
    "curly": ["error", "all"],                                        // http://eslint.org/docs/rules/curly
    "default-case": "error",                                          // http://eslint.org/docs/rules/default-case
    "dot-location": ["error", "property"],                            // http://eslint.org/docs/rules/dot-location
    "dot-notation": "error",                                          // http://eslint.org/docs/rules/dot-notation
    "eqeqeq": "error",                                                // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": "error",                                          // http://eslint.org/docs/rules/guard-for-in
    "no-alert": "warn",                                               // http://eslint.org/docs/rules/no-alert
    "no-caller": "error",                                             // http://eslint.org/docs/rules/no-caller
    "no-case-declarations": "error",                                  // http://eslint.org/docs/rules/no-case-declarations
    "no-div-regex": "error",                                          // http://eslint.org/docs/rules/no-div-regex
    "no-else-return": "error",                                        // http://eslint.org/docs/rules/no-else-return
    "no-empty-function": "off",                                       // http://eslint.org/docs/rules/no-empty-function
    "no-empty-pattern": "error",                                      // http://eslint.org/docs/rules/no-empty-pattern
    "no-eq-null": "error",                                            // http://eslint.org/docs/rules/no-eq-null
    "no-eval": "error",                                               // http://eslint.org/docs/rules/no-eval
    "no-extend-native": "error",                                      // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind": "error",                                         // http://eslint.org/docs/rules/no-extra-bind
    "no-extra-label": "warn",                                         // http://eslint.org/docs/rules/no-extra-label
    "no-fallthrough": "error",                                        // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": "error",                                   // http://eslint.org/docs/rules/no-floating-decimal
    "no-global-assign": "error",                                      // http://eslint.org/docs/rules/no-global-assign
    "no-implicit-coercion": ["error", {                               // http://eslint.org/docs/rules/no-implicit-coercion
      "boolean": false
    }],
    "no-implicit-globals": "error",                                   // http://eslint.org/docs/rules/no-implicit-globals
    "no-implied-eval": "error",                                       // http://eslint.org/docs/rules/no-implied-eval
    "no-invalid-this": "off",                                         // http://eslint.org/docs/rules/no-invalid-this
    "no-iterator": "error",                                           // http://eslint.org/docs/rules/no-iterator
    "no-lone-blocks": "error",                                        // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": "error",                                          // http://eslint.org/docs/rules/no-loop-func
    "no-magic-numbers": "off",                                        // http://eslint.org/docs/rules/no-magic-numbers
    "no-multi-spaces": "off",                                         // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str": "error",                                          // http://eslint.org/docs/rules/no-multi-str
    "no-new-func": "error",                                           // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers": "error",                                       // http://eslint.org/docs/rules/no-new-wrappers
    "no-new": "error",                                                // http://eslint.org/docs/rules/no-new
    "no-octal-escape": "error",                                       // http://eslint.org/docs/rules/no-octal-escape
    "no-octal": "error",                                              // http://eslint.org/docs/rules/no-octal
    "no-param-reassign": "error",                                     // http://eslint.org/docs/rules/no-param-reassign
    "no-proto": "error",                                              // http://eslint.org/docs/rules/no-proto
    "no-redeclare": "error",                                          // http://eslint.org/docs/rules/no-redeclare
    "no-restricted-properties": "off",                                // http://eslint.org/docs/rules/no-restricted-properties
    "no-return-assign": "error",                                      // http://eslint.org/docs/rules/no-return-assign
    "no-return-await": "off",                                         // http://eslint.org/docs/rules/no-return-await
    "no-script-url": "error",                                         // http://eslint.org/docs/rules/no-script-url
    "no-self-assign": "error",                                        // http://eslint.org/docs/rules/no-self-assign
    "no-self-compare": "error",                                       // http://eslint.org/docs/rules/no-self-compare
    "no-sequences": "error",                                          // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": "error",                                      // http://eslint.org/docs/rules/no-throw-literal
    "no-unmodified-loop-condition": "warn",                           // http://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unused-expressions": "off",                                   // http://eslint.org/docs/rules/no-unused-expressions
    "no-unused-labels": "error",                                      // http://eslint.org/docs/rules/no-unused-labels
    "no-useless-call": "error",                                       // http://eslint.org/docs/rules/no-useless-call
    "no-useless-concat": "error",                                     // http://eslint.org/docs/rules/no-useless-concat
    "no-useless-escape": "off",                                       // http://eslint.org/docs/rules/no-useless-escape
    "no-useless-return": "off",                                       // http://eslint.org/docs/rules/no-useless-return
    "no-void": "error",                                               // http://eslint.org/docs/rules/no-void
    "no-warning-comments": "off",                                     // http://eslint.org/docs/rules/no-warning-comments
    "no-with": "error",                                               // http://eslint.org/docs/rules/no-with
    "radix": "error",                                                 // http://eslint.org/docs/rules/radix
    "require-await": "off",                                           // http://eslint.org/docs/rules/require-await
    "vars-on-top": "error",                                           // http://eslint.org/docs/rules/vars-on-top
    "wrap-iife": ["error", "any"],                                    // http://eslint.org/docs/rules/wrap-iife
    "yoda": "error",                                                  // http://eslint.org/docs/rules/yoda

    /**
     * Strict Mode
     * http://eslint.org/docs/rules/#strict-mode
     */
    "strict": "off",                                                  // http://eslint.org/docs/rules/strict

    /**
     * Variables
     * http://eslint.org/docs/rules/#variables
     */
    "init-declarations": "off",                                       // http://eslint.org/docs/rules/init-declarations
    "no-catch-shadow": "off",                                         // http://eslint.org/docs/rules/no-catch-shadow
    "no-delete-var": "off",                                           // http://eslint.org/docs/rules/no-delete-var
    "no-label-var": "off",                                            // http://eslint.org/docs/rules/no-label-var
    "no-restricted-globals": "off",                                   // http://eslint.org/docs/rules/no-restricted-globals
    "no-shadow-restricted-names": "error",                            // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow": "error",                                             // http://eslint.org/docs/rules/no-shadow
    "no-undef-init": "error",                                         // http://eslint.org/docs/rules/no-undef-init
    "no-undef": "error",                                              // http://eslint.org/docs/rules/no-undef
    "no-undefined": "error",                                          // http://eslint.org/docs/rules/no-undefined
    "no-unused-vars": ["error", {                                     // http://eslint.org/docs/rules/no-unused-vars
      "vars": "local",
      "args": "after-used"
    }],
    "no-use-before-define": "error",                                  // http://eslint.org/docs/rules/no-use-before-define

    /**
     * Node.js and CommonJS
     * http://eslint.org/docs/rules/#nodejs-and-commonjs
     */
    "callback-return": "off",                                         // http://eslint.org/docs/rules/callback-return
    "global-require": "off",                                          // http://eslint.org/docs/rules/global-require
    "handle-callback-err": "warn",                                    // http://eslint.org/docs/rules/handle-callback-err
    "no-mixed-requires": "off",                                       // http://eslint.org/docs/rules/no-mixed-requires
    "no-new-require": "error",                                        // http://eslint.org/docs/rules/no-new-require
    "no-path-concat": "error",                                        // http://eslint.org/docs/rules/no-path-concat
    "no-process-env": "off",                                          // http://eslint.org/docs/rules/no-process-env
    "no-process-exit": "off",                                         // http://eslint.org/docs/rules/no-process-exit
    "no-restricted-modules": "off",                                   // http://eslint.org/docs/rules/no-restricted-modules
    "no-sync": "warn",                                                // http://eslint.org/docs/rules/no-sync

    /**
     * Stylistic Issues
     * http://eslint.org/docs/rules/#stylistic-issues
     */
    "array-bracket-spacing": ["error", "never"],                      // http://eslint.org/docs/rules/array-bracket-spacing
    "block-spacing": ["error", "always"],                             // http://eslint.org/docs/rules/block-spacing
    "brace-style": ["error", "1tbs", {                                // http://eslint.org/docs/rules/brace-style
      "allowSingleLine": true
    }],
    "camelcase": ["error", {                                          // http://eslint.org/docs/rules/camelcase
      "properties": "never"
    }],
    "comma-dangle": ["error", "never"],                               // http://eslint.org/docs/rules/comma-dangle
    "comma-spacing": "error",                                         // http://eslint.org/docs/rules/comma-spacing
    "comma-style": "error",                                           // http://eslint.org/docs/rules/comma-style
    "computed-property-spacing": "error",                             // http://eslint.org/docs/rules/computed-property-spacing
    "consistent-this": "off",                                         // http://eslint.org/docs/rules/consistent-this
    "eol-last": "error",                                              // http://eslint.org/docs/rules/eol-last
    "func-call-spacing": "error",                                     // http://eslint.org/docs/rules/func-call-spacing
    "func-name-matching": "off",                                      // http://eslint.org/docs/rules/func-name-matching
    "func-names": "off",                                              // http://eslint.org/docs/rules/func-names
    "func-style": "off",                                              // http://eslint.org/docs/rules/func-style
    "id-blacklist": "off",                                            // http://eslint.org/docs/rules/id-blacklist
    "id-length": "off",                                               // http://eslint.org/docs/rules/id-length
    "id-match": "off",                                                // http://eslint.org/docs/rules/id-match
    "indent": ["error", 2],                                           // http://eslint.org/docs/rules/indent
    "jsx-quotes": "error",                                            // http://eslint.org/docs/rules/jsx-quotes
    "key-spacing": "error",                                           // http://eslint.org/docs/rules/key-spacing
    "keyword-spacing": "error",                                       // http://eslint.org/docs/rules/keyword-spacing
    "line-comment-position": "off",                                   // http://eslint.org/docs/rules/line-comment-position
    "linebreak-style": "error",                                       // http://eslint.org/docs/rules/linebreak-style
    "lines-around-comment": "off",                                    // http://eslint.org/docs/rules/lines-around-comment
    "lines-around-directive": "off",                                  // http://eslint.org/docs/rules/lines-around-directive
    "max-depth": "off",                                               // http://eslint.org/docs/rules/max-depth
    "max-len": "off",                                                 // http://eslint.org/docs/rules/max-len
    "max-lines": "off",                                               // http://eslint.org/docs/rules/max-lines
    "max-nested-callbacks": "off",                                    // http://eslint.org/docs/rules/max-nested-callbacks
    "max-params": "off",                                              // http://eslint.org/docs/rules/max-params
    "max-statements-per-line": "off",                                 // http://eslint.org/docs/rules/max-statements-per-line
    "max-statements": "off",                                          // http://eslint.org/docs/rules/max-statements
    "multiline-ternary": "off",                                       // http://eslint.org/docs/rules/multiline-ternary
    "new-cap": ["error", {                                            // http://eslint.org/docs/rules/new-cap
      "capIsNewExceptions": ["Record"],
      "newIsCap": true
    }],
    "new-parens": "error",                                            // http://eslint.org/docs/rules/new-parens
    "newline-after-var": "off",                                       // http://eslint.org/docs/rules/newline-after-var
    "newline-before-return": "off",                                   // http://eslint.org/docs/rules/newline-before-return
    "newline-per-chained-call": ["error", {                           // http://eslint.org/docs/rules/newline-per-chained-call
      "ignoreChainWithDepth": 3
    }],
    "no-array-constructor": "error",                                  // http://eslint.org/docs/rules/no-array-constructor
    "no-bitwise": "off",                                              // http://eslint.org/docs/rules/no-bitwise
    "no-continue": "off",                                             // http://eslint.org/docs/rules/no-continue
    "no-inline-comments": "off",                                      // http://eslint.org/docs/rules/no-inline-comments
    "no-lonely-if": "off",                                            // http://eslint.org/docs/rules/no-lonely-if
    "no-mixed-operators": "off",                                      // http://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-spaces-and-tabs": "off",                                // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-multiple-empty-lines": ["error", {                            // http://eslint.org/docs/rules/no-multiple-empty-lines
      "max": 2
    }],
    "no-negated-condition": "off",                                    // http://eslint.org/docs/rules/no-negated-condition
    "no-nested-ternary": "error",                                     // http://eslint.org/docs/rules/no-nested-ternary
    "no-new-object": "error",                                         // http://eslint.org/docs/rules/no-new-object
    "no-plusplus": "off",                                             // http://eslint.org/docs/rules/no-plusplus
    "no-restricted-syntax": "off",                                    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-tabs": "error",                                               // http://eslint.org/docs/rules/no-tabs
    "no-ternary": "off",                                              // http://eslint.org/docs/rules/no-ternary
    "no-trailing-spaces": "error",                                    // http://eslint.org/docs/rules/no-trailing-spaces
    "no-underscore-dangle": "off",                                    // http://eslint.org/docs/rules/no-underscore-dangle
    "no-unneeded-ternary": "error",                                   // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-whitespace-before-property": "error",                         // http://eslint.org/docs/rules/no-whitespace-before-property
    "object-curly-newline": "off",                                    // http://eslint.org/docs/rules/object-curly-newline
    "object-curly-spacing": ["error", "always"],                      // http://eslint.org/docs/rules/object-curly-spacing
    "object-property-newline": "off",                                 // http://eslint.org/docs/rules/object-property-newline
    "one-var-declaration-per-line": "error",                          // http://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var": ["error", "never"],                                    // http://eslint.org/docs/rules/one-var
    "operator-assignment": "off",                                     // http://eslint.org/docs/rules/operator-assignment
    "operator-linebreak": ["error", "after"],                         // http://eslint.org/docs/rules/operator-linebreak
    "padded-blocks": ["error", "never"],                              // http://eslint.org/docs/rules/padded-blocks
    "quote-props": ["error", "as-needed"],                            // http://eslint.org/docs/rules/quote-props
    "quotes": ["error", "single", {                                   // http://eslint.org/docs/rules/quotes
      "avoidEscape": true
    }],
    "require-jsdoc": "off",                                           // http://eslint.org/docs/rules/require-jsdoc
    "semi-spacing": "error",                                          // http://eslint.org/docs/rules/semi-spacing
    "semi": "error",                                                  // http://eslint.org/docs/rules/semi
    "sort-keys": "off",                                               // http://eslint.org/docs/rules/sort-keys
    "sort-vars": "off",                                               // http://eslint.org/docs/rules/sort-vars
    "space-before-blocks": "error",                                   // http://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren": ["error", "never"],                // http://eslint.org/docs/rules/space-before-function-paren
    "space-in-parens": "error",                                       // http://eslint.org/docs/rules/space-in-parens
    "space-infix-ops": "error",                                       // http://eslint.org/docs/rules/space-infix-ops
    "space-unary-ops": "error",                                       // http://eslint.org/docs/rules/space-unary-ops
    "spaced-comment": ["error", "always",  {                          // http://eslint.org/docs/rules/spaced-comment
      "exceptions": ["-", "+"],
      "markers": ["=", "!"]                                           // space here to support sprockets directives
    }],
    "unicode-born": "off",                                            // http://eslint.org/docs/rules/unicode-bom
    "wrap-regex": "off",                                              // http://eslint.org/docs/rules/wrap-regex

    /**
     * ECMAScript 6
     * http://eslint.org/docs/rules/#ecmascript-6
     */
    "arrow-body-style": "off",                                        // http://eslint.org/docs/rules/arrow-body-style
    "arrow-parens": "off",                                            // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": "error",                                         // http://eslint.org/docs/rules/arrow-spacing
    "constructor-super": "error",                                     // http://eslint.org/docs/rules/constructor-super
    "generator-star-spacing": "error",                                // http://eslint.org/docs/rules/generator-star-spacing
    "no-class-assign": "error",                                       // http://eslint.org/docs/rules/no-class-assign
    "no-confusing-arrow": "error",                                    // http://eslint.org/docs/rules/no-confusing-arrow
    "no-const-assign": "error",                                       // http://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members": "error",                                 // http://eslint.org/docs/rules/no-dupe-class-members
    "no-duplicate-imports": "error",                                  // http://eslint.org/docs/rules/no-duplicate-imports
    "no-new-symbol": "error",                                         // http://eslint.org/docs/rules/no-new-symbol
    "no-restricted-imports": "off",                                   // http://eslint.org/docs/rules/no-restricted-imports
    "no-this-before-super": "error",                                  // http://eslint.org/docs/rules/no-this-before-super
    "no-useless-computed-key": "error",                               // http://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-constructor": "error",                                // http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-rename": "error",                                     // http://eslint.org/docs/rules/no-useless-rename
    "no-var": "error",                                                // http://eslint.org/docs/rules/no-var
    "object-shorthand": "error",                                      // http://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback": "off",                                   // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": "error",                                          // http://eslint.org/docs/rules/prefer-const
    "prefer-numeric-literals": "off",                                 // http://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-rest-params": "error",                                    // http://eslint.org/docs/rules/prefer-rest-params
    "prefer-spread": "error",                                         // http://eslint.org/docs/rules/prefer-spread
    "prefer-template": "error",                                       // http://eslint.org/docs/rules/prefer-template
    "require-yield": "error",                                         // http://eslint.org/docs/rules/require-yield
    "rest-spread-spacing": "error",                                   // http://eslint.org/docs/rules/rest-spread-spacing
    "sort-imports": "off",                                            // http://eslint.org/docs/rules/sort-imports
    "symbol-description": "off",                                      // http://eslint.org/docs/rules/symbol-description
    "template-curly-spacing": "error",                                // http://eslint.org/docs/rules/template-curly-spacing
    "yield-star-spacing": "error",                                    // http://eslint.org/docs/rules/yield-star-spacing

  }
};
