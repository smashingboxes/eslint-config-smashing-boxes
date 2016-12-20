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
    // "init-declarations":                                                       // http://eslint.org/docs/rules/init-declarations

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
