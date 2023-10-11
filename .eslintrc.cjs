module.exports = {
  root: true,
  env: {
    node: true,
    browser: false
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tests/tsconfig.json"],
  },
  rules: {
    "no-var": "error",
    "prefer-const": "warn",
    "no-console": "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
  },
};
