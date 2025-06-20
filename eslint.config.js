import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@features", "./src/features"],
            ["@shared", "./src/shared"],
            ["@api", "./src/shared/api"],
            ["@hooks", "./src/shared/hooks"],
            ["@utils", "./src/shared/utils"],
            ["@stores", "./src/shared/stores"],
            ["@configs", "./src/shared/configs"],
            ["@components", "./src/shared/components"],
          ],
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
