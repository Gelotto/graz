// @ts-check

const { extendEslint } = require("@graz-sh/style-guide");

module.exports = extendEslint(["browser-node", "react", "typescript", "tsup"], {
  ignorePatterns: ["chains/**", "compiled/**", "dist/**", "templates/**"],
  root: true,
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
});
