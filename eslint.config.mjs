import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JavaScript rules
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    ignores: ["**/.expo/**"], // Ignore Expo/Metro generated files
  },
  // Add browser and Node globals
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // React recommended rules with version
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "18.2.0",
      },
    },
  },
  // React Native rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": pluginReactNative,
    },
    rules: {
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
    },
  },
  // Optional: Customize rules
  {
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);