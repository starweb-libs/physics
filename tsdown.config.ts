import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    'src/body.ts',
    'src/collision.ts',
    'src/geometry.ts',
    'src/overlap.ts',
    'src/types.ts',
  ],
  format: 'esm',
  dts: true,
  sourcemap: true,
  clean: true,
  unbundle: true,
});
