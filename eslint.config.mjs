import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import perfectionist from "eslint-plugin-perfectionist";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { files: ["**/*.{js,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      prettier,
      perfectionist,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: { version: "18.2" },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  {
    rules: {
      "semi": 1,
      "max-lines": "off",
      "import/order": "off",
      "indent": ["error", 2],
      "@stylistic/max-len": "off",
      "react/display-name": "off",
      "quotes": ["warn", "double"],
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "object-curly-spacing": ["error", "always"],
      "@stylistic/jsx-curly-brace-presence": "off",
      "perfectionist/sort-array-includes": ["error", { order: "asc" }],
      "perfectionist/sort-enums": ["error", { order: "asc", type: "line-length" }],

      "perfectionist/sort-objects": ["error", { order: "asc", type: "line-length" }],
      "perfectionist/sort-exports": ["error", { order: "asc", type: "line-length" }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "perfectionist/sort-jsx-props": ["error", { order: "asc", type: "line-length" }],
      "perfectionist/sort-interfaces": ["error", { order: "asc", type: "line-length" }],
      "perfectionist/sort-union-types": ["error", { order: "asc", type: "line-length" }],
      "perfectionist/sort-object-types": ["error", { order: "asc", type: "line-length" }],
      "perfectionist/sort-named-exports": ["error", { order: "asc", type: "line-length" }],
      "perfectionist/sort-named-imports": ["error", { order: "asc", type: "line-length" }],
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-check": true,
          "ts-ignore": false,
          "ts-nocheck": true,
          "ts-expect-error": true,
        },
      ],
    },
  },
  eslintConfigPrettier,
];
