import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals, { builtin } from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
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

            ["@app", "./src/app"],
            ["@pages", "./src/pages"],
            ["@widgets", "./src/widgets"],
            ["@features", "./src/features"],
            ["@entities", "./src/entities"],
            ["@shared", "./src/widgets"],
          ],
          extensions: [".js", ".ts", ".jsx", ".tsx"],
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
