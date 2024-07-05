module.exports = {
 env: {
  commonjs: true,
  es2021: true,
  node: true,
  jest: true, // Додано підтримку Jest
 },
 extends: ["standard", "prettier", "plugin:jest/recommended"],
 parserOptions: {
  ecmaVersion: 12,
 },
 plugins: ["jest"],
 rules: {},
};
