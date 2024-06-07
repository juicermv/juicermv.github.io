import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    cssMinify: 'lightningcss',
    terserOptions: {
      module: true,
      toplevel: true,
      compress: {
        booleans_as_integers: true,
        hoist_funs: true,
        module: true,
        toplevel: true,
        passes: 5,
        unsafe: true,
        unsafe_Function: true,
        unsafe_math: true,
      },
      mangle: {
        eval: true,
        toplevel: true,
        module: true
      }
    }
  },
  css :{
    lightningcss : {
      minify: true,
      analyzeDependencies: true,
    }
  }
})
