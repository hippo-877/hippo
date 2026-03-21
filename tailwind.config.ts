import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(214 32% 91%)',
        input: 'hsl(214 32% 91%)',
        ring: 'hsl(221 83% 53%)',
        background: 'hsl(210 40% 98%)',
        foreground: 'hsl(222.2 84% 4.9%)',
      },
      borderRadius: { lg: '0.75rem', md: '0.5rem', sm: '0.375rem' }
    }
  },
  plugins: [],
} satisfies Config
