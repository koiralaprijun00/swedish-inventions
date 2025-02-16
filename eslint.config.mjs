import { FlatCompat } from "@eslint/eslintrc"
import { join } from "path"

const compat = new FlatCompat({
  baseDirectory: join(process.cwd())
})

const configArray = compat.config({
  extends: ["next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  },
  settings: {
    next: {
      rootDir: "packages/my-app/"
    }
  }
})