const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '/pastas-y-carnes-120/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        menu: './menu.html',
        quienes: './quienes-somos.html',
        mision: './mision.html',
        pedido: './hacer-pedido.html'
      }
    }
  }
})
