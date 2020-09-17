import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: "src/Hello.ts",
  output: [
    {
      name: "RollupHello",
      file: pkg.main,
      format: "umd",
      exports: "named",
    },
    {
      file: pkg.cjs,
      format: "cjs",
      exports: "default",
    },
    {
      name: "RollupHello",
      file: pkg.browser,
      format: "iife",
      exports: "default",
    },
  ],
  plugins: [typescript()],
};
