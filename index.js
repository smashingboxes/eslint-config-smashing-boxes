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
    "no-console": "warning",                                                      // http://eslint.org/docs/rules/no-console
    "no-constant-condition": "warning",                                           // http://eslint.org/docs/rules/no-constant-condition
    "no-control-regex": "error",                                                  // http://eslint.org/docs/rules/no-control-regex
    "no-debugger": "warning",                                                     // http://eslint.org/docs/rules/no-debugger
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
    "no-template-curly-in-string": "warning",                                     // http://eslint.org/docs/rules/no-template-curly-in-string
    "no-unexpected-multiline": "error",                                           // http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unreachable": "error",                                                    // http://eslint.org/docs/rules/no-unreachable
    "no-unsafe-finally": "error",                                                 // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-negation": "error",                                                // http://eslint.org/docs/rules/no-unsafe-negation
    "use-isnan": "error",                                                         // http://eslint.org/docs/rules/use-isnan
    "valid-jsdoc": "error",                                                       // http://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof": "error",                                                      // http://eslint.org/docs/rules/valid-typeof

    /**
     * Best Practices
     * http://eslint.org/docs/rules/#best-practices
     */
    "accessor-pairs": "off",                                                      // http://eslint.org/docs/rules/accessor-pairs


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
    "no-label-var": "warning",                                                    // http://eslint.org/docs/rules/no-label-var
    "no-restricted-globals": "off",                                               // http://eslint.org/docs/rules/no-restricted-globals
    "no-shadow-restricted-names": "error",                                        // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow": "error",                                                         // http://eslint.org/docs/rules/no-shadow
    "no-undef-init": "error",                                                     // http://eslint.org/docs/rules/no-undef-init
    "no-undef": "error",                                                          // http://eslint.org/docs/rules/no-undef
    "no-undefined": "error",                                                      // http://eslint.org/docs/rules/no-undefined
    "no-unused-vars": ["error", {
      "vars": "local",
      "args": "after-used"
    }],                                                                           // http://eslint.org/docs/rules/no-unused-vars
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
