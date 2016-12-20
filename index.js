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
    "no-control-regex": "off",                                                    // http://eslint.org/docs/rules/no-control-regex
    "no-debugger": "warn",                                                        // http://eslint.org/docs/rules/no-debugger


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
