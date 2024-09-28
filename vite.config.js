import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// console.log('Base64 Value:', props.base64);
// if (!props.base64 || !props.base64.startsWith('data:image/')) {
//   console.error('Invalid Base64 string:', props.base64);
//   return null; // Or return some error UI
// }
