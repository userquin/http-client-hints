import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/critical.ts',
    'src/detect.ts',
    'src/device.ts',
    'src/h3.ts',
    'src/index.ts',
    'src/network.ts',
  ],
  format: ['cjs', 'esm'],
  splitting: true,
  clean: true,
  dts: true,
  external: ['detect-browser-es', 'h3'],
})
