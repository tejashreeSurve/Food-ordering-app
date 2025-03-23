import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // "import/no-unresolved": "error",
      // "import/named": "error",
      // "import/default": "warn",
      // "import/namespace": "warn",
      // "import/no-extraneous-dependencies": "error",
      // "import/no-named-as-default": "error",
      // "import/no-named-as-default-member": "error",
      // "no-undef": "error",
      // "react/jsx-no-undef": "error",
    },
  },
];
