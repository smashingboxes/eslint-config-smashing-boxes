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
    "no-await-in-loop": "off",                                                    // http://eslint.org/docs/rules/no-await-in-loop
    "no-cond-assign": ["error", "always"],                                        // http://eslint.org/docs/rules/no-cond-assign
    "no-console": "warn",                                                         // http://eslint.org/docs/rules/no-console
    "no-constant-condition": "warn",                                              // http://eslint.org/docs/rules/no-constant-condition
    "no-control-regex": "error",                                                  // http://eslint.org/docs/rules/no-control-regex
    "no-debugger": "warn",                                                        // http://eslint.org/docs/rules/no-debugger
    "no-dupe-args": "error",                                                      // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-keys": "error",                                                      // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": "error",                                                 // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty-character-class": "error",                                          // http://eslint.org/docs/rules/no-empty-character-class
    "no-empty": "error",                                                          // http://eslint.org/docs/rules/no-empty
    "no-ex-assign": "error",                                                      // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast": "off",                                               // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-parens": ["error", "functions"],                                    // http://eslint.org/docs/rules/no-extra-parens
    "no-extra-semi": "error",                                                     // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": "error",                                                    // http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations": "error",                                             // http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp": "error",                                                 // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": "error",                                           // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-obj-calls": "error",                                                      // http://eslint.org/docs/rules/no-obj-calls
    "no-prototype-builtins": "error",                                             // http://eslint.org/docs/rules/no-prototype-builtins
    "no-regex-spaces": "error",                                                   // http://eslint.org/docs/rules/no-regex-spaces
    "no-sparse-arrays": "error",                                                  // http://eslint.org/docs/rules/no-sparse-arrays
    "no-template-curly-in-string": "warn",                                        // http://eslint.org/docs/rules/no-template-curly-in-string
    "no-unexpected-multiline": "error",                                           // http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unreachable": "error",                                                    // http://eslint.org/docs/rules/no-unreachable
    "no-unsafe-finally": "error",                                                 // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-negation": "error",                                                // http://eslint.org/docs/rules/no-unsafe-negation
    "use-isnan": "error",                                                         // http://eslint.org/docs/rules/use-isnan
    "valid-jsdoc": "off",                                                         // http://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof": "error",                                                      // http://eslint.org/docs/rules/valid-typeof

    /**
     * Best Practices
     * http://eslint.org/docs/rules/#best-practices
     */
    "accessor-pairs": "error",                                                    // http://eslint.org/docs/rules/accessor-pairs
    "array-callback-return": "error",                                             // http://eslint.org/docs/rules/array-callback-return
    "block-scoped-var": "error",                                                  // http://eslint.org/docs/rules/block-scoped-var
    "class-methods-use-this": "off",                                              // http://eslint.org/docs/rules/class-methods-use-this
    "complexity": "warn",                                                         // http://eslint.org/docs/rules/complexity
    "consistent-return": "off",                                                   // http://eslint.org/docs/rules/consistent-return
    "curly": ["error", "all"],                                                    // http://eslint.org/docs/rules/curly
    "default-case": "error",                                                      // http://eslint.org/docs/rules/default-case
    "dot-location": ["error", "property"],                                        // http://eslint.org/docs/rules/dot-location
    "dot-notation": "error",                                                      // http://eslint.org/docs/rules/dot-notation
    "eqeqeq": "error",                                                            // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": "error",                                                      // http://eslint.org/docs/rules/guard-for-in
    "no-alert": "warn",                                                           // http://eslint.org/docs/rules/no-alert
    "no-caller": "error",                                                         // http://eslint.org/docs/rules/no-caller
    "no-case-declarations": "error",                                              // http://eslint.org/docs/rules/no-case-declarations
    "no-div-regex": "error",                                                      // http://eslint.org/docs/rules/no-div-regex
    "no-else-return": "error",                                                    // http://eslint.org/docs/rules/no-else-return
    "no-empty-function": "off",                                                   // http://eslint.org/docs/rules/no-empty-function
    "no-empty-pattern": "error",                                                  // http://eslint.org/docs/rules/no-empty-pattern
    "no-eq-null": "error",                                                        // http://eslint.org/docs/rules/no-eq-null
    "no-eval": "error",                                                           // http://eslint.org/docs/rules/no-eval
    "no-extend-native": "error",                                                  // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind": "error",                                                     // http://eslint.org/docs/rules/no-extra-bind
    "no-extra-label": "warn",                                                     // http://eslint.org/docs/rules/no-extra-label
    "no-fallthrough": "error",                                                    // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": "error",                                               // http://eslint.org/docs/rules/no-floating-decimal
    "no-global-assign": "error",                                                  // http://eslint.org/docs/rules/no-global-assign
    "no-implicit-coercion": ["error", { "boolean": false }],                      // http://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-globals": "error",                                               // http://eslint.org/docs/rules/no-implicit-globals
    "no-implied-eval": "error",                                                   // http://eslint.org/docs/rules/no-implied-eval
    "no-invalid-this": "off",                                                     // http://eslint.org/docs/rules/no-invalid-this
    "no-iterator": "error",                                                       // http://eslint.org/docs/rules/no-iterator
    "no-lone-blocks": "error",                                                    // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": "error",                                                      // http://eslint.org/docs/rules/no-loop-func
    "no-magic-numbers": "off",                                                    // http://eslint.org/docs/rules/no-magic-numbers
    "no-multi-spaces": "off",                                                     // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str": "error",                                                      // http://eslint.org/docs/rules/no-multi-str
    "no-new-func": "error",                                                       // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers": "error",                                                   // http://eslint.org/docs/rules/no-new-wrappers
    "no-new": "error",                                                            // http://eslint.org/docs/rules/no-new
    "no-octal-escape": "error",                                                   // http://eslint.org/docs/rules/no-octal-escape
    "no-octal": "error",                                                          // http://eslint.org/docs/rules/no-octal
    "no-param-reassign": "error",                                                 // http://eslint.org/docs/rules/no-param-reassign
    "no-proto": "error",                                                          // http://eslint.org/docs/rules/no-proto
    "no-redeclare": "error",                                                      // http://eslint.org/docs/rules/no-redeclare
    "no-restricted-properties": "off",                                            // http://eslint.org/docs/rules/no-restricted-properties
    "no-return-assign": "error",                                                  // http://eslint.org/docs/rules/no-return-assign
    "no-return-await": "off",                                                     // http://eslint.org/docs/rules/no-return-await
    "no-script-url": "error",                                                     // http://eslint.org/docs/rules/no-script-url
    "no-self-assign": "error",                                                    // http://eslint.org/docs/rules/no-self-assign
    "no-self-compare": "error",                                                   // http://eslint.org/docs/rules/no-self-compare
    "no-sequences": "error",                                                      // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": "error",                                                  // http://eslint.org/docs/rules/no-throw-literal
    "no-unmodified-loop-condition": "warn",                                       // http://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unused-expressions": "off",                                               // http://eslint.org/docs/rules/no-unused-expressions
    "no-unused-labels": "error",                                                  // http://eslint.org/docs/rules/no-unused-labels
    "no-useless-call": "error",                                                   // http://eslint.org/docs/rules/no-useless-call
    "no-useless-concat": "error",                                                 // http://eslint.org/docs/rules/no-useless-concat
    "no-useless-escape": "off",                                                   // http://eslint.org/docs/rules/no-useless-escape
    "no-useless-return": "off",                                                   // http://eslint.org/docs/rules/no-useless-return
    "no-void": "error",                                                           // http://eslint.org/docs/rules/no-void
    "no-warning-comments": "off",                                                 // http://eslint.org/docs/rules/no-warning-comments
    "no-with": "error",                                                           // http://eslint.org/docs/rules/no-with
    "radix": "error",                                                             // http://eslint.org/docs/rules/radix
    "require-await": "off",                                                       // http://eslint.org/docs/rules/require-await
    "vars-on-top": "error",                                                       // http://eslint.org/docs/rules/vars-on-top
    "wrap-iife": ["error", "any"],                                                // http://eslint.org/docs/rules/wrap-iife
    "yoda": "error",                                                              // http://eslint.org/docs/rules/yoda

    /**
     * Strict Mode
     * http://eslint.org/docs/rules/#strict-mode
     */
    "strict": "off",                                                              // http://eslint.org/docs/rules/strict


    /**
     * Variables
     * http://eslint.org/docs/rules/#variables
     */
    "init-declarations": "off",                                                   // http://eslint.org/docs/rules/init-declarations
    "no-catch-shadow": "off",                                                     // http://eslint.org/docs/rules/no-catch-shadow
    "no-delete-var": "error",                                                     // http://eslint.org/docs/rules/no-delete-var
    "no-label-var": "off",                                                        // http://eslint.org/docs/rules/no-label-var
    "no-restricted-globals": "off",                                               // http://eslint.org/docs/rules/no-restricted-globals
    "no-shadow-restricted-names": "error",                                        // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow": "error",                                                         // http://eslint.org/docs/rules/no-shadow
    "no-undef-init": "error",                                                     // http://eslint.org/docs/rules/no-undef-init
    "no-undef": "error",                                                          // http://eslint.org/docs/rules/no-undef
    "no-undefined": "error",                                                      // http://eslint.org/docs/rules/no-undefined
    "no-unused-vars": ["error", {                                                 // http://eslint.org/docs/rules/no-unused-vars
      "vars": "local",
      "args": "after-used"
    }],
    "no-use-before-define": "error",                                              // http://eslint.org/docs/rules/no-use-before-define

    /**
     * Node.js and CommonJS
     * http://eslint.org/docs/rules/#nodejs-and-commonjs
     */



    /**
     * Stylistic Issues
     * http://eslint.org/docs/rules/#stylistic-issues
     */
    "array-bracket-spacing": ["error", "never"],                                  // http://eslint.org/docs/rules/array-bracket-spacing


    /**
     * ECMAScript 6
     * http://eslint.org/docs/rules/#ecmascript-6
     */
    "arrow-body-style": ["error", "as-needed"]                                   // http://eslint.org/docs/rules/arrow-body-style

  }

};
