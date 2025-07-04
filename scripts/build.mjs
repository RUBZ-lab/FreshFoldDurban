import esbuild from 'esbuild'
import { stylePlugin } from 'esbuild-style-plugin'
import { rimraf } from 'rimraf'
import fs from 'fs'
import path from 'path'

const isProduction = process.argv.includes('--production')

// Clean dist directory
await rimraf('dist')

// Ensure dist directory exists
fs.mkdirSync('dist', { recursive: true })

// Copy index.html to dist
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FreshFold Durban - Laundry Pickup & Delivery Service</title>
    <meta name="description" content="Professional laundry pickup and delivery service in Durban. We wash, dry, fold and deliver your clothes fresh and clean.">
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div id="app"></div>
    <script src="main.js"></script>
</body>
</html>`

fs.writeFileSync('dist/index.html', indexHtml)

// Build configuration
const buildConfig = {
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outdir: 'dist',
  format: 'iife',
  target: 'es2020',
  jsx: 'automatic',
  jsxImportSource: 'react',
  minify: isProduction,
  sourcemap: !isProduction,
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    }),
  ],
  external: [],
  define: {
    'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
  },
  entryNames: '[name]',
  assetNames: '[name]',
  chunkNames: '[name]',
  publicPath: './',
}

try {
  if (isProduction) {
    // Build once for production
    await esbuild.build(buildConfig)
    console.log('✅ Production build completed successfully!')
  } else {
    // Development mode with watch
    const ctx = await esbuild.context(buildConfig)
    await ctx.watch()
    console.log('👀 Watching for changes...')
    
    // Start dev server
    const { host, port } = await ctx.serve({
      servedir: 'dist',
      port: 3000,
    })
    console.log(`🚀 Server running at http://${host}:${port}`)
  }
} catch (error) {
  console.error('❌ Build failed:', error)
  process.exit(1)
}
