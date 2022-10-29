module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ["eslint:recommended", "prettier", "plugin:sonarjs/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "sonarjs"],
  rules: {
    "no-await-in-loop": "warn",
    "no-return-await": "warn",
    "require-await": "warn",
    "simple-import-sort/imports": "warn",
  },
};
