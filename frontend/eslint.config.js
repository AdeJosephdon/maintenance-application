// frontend/eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,    
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },

    settings: {
      react: {
        version: "detect", 
      },
    },

    rules: {
      // React
      "react/react-in-jsx-scope": "off",  
      "react/prop-types": "off",         

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/click-events-have-key-events": "warn",  // warn in dev
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",

      // General
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "React" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

];
