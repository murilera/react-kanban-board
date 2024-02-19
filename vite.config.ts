import { defineConfig, createLogger } from 'vite'
import react from '@vitejs/plugin-react'
import bodyParser from 'body-parser'
import mockServer from 'vite-plugin-mock-server'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: parseInt(process.env.WEBSOCKET_PORT!),
    },
  },
  plugins: [
    react(),
    mockServer({
      logLevel: 'info',
      middlewares: [
        bodyParser.json(),
      ],
    }),
  ],
  customLogger: createLogger('info', { prefix: '[coderpad]' }),
})
