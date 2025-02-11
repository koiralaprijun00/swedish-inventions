import { FlatCompat } from "@eslint/eslintrc";
import { join } from "path";

const compat = new FlatCompat({
  baseDirectory: join(process.cwd()), // Avoid using import.meta.dirname
});

export default [
  ...compat.config({
    extends: ["next"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off"
    },
    settings: {
      next: {
        rootDir: "packages/my-app/", // Ensure your project root is correct if needed
      },
    },
  }),
];
