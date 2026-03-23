/** @type {import('tailwindcss').Config} */

/**
 * COLOR MAPPING: Next.js (oklch) → React Native / Gluestack (hex)
 *
 * WHY HARDCODED HEX:
 * NativeWind compiles Tailwind classes to React Native StyleSheet objects
 * at build time. React Native Web's StyleSheet.create() resolves styles
 * to static values — it does NOT support CSS custom properties (var(--x)).
 * Using rgb(var(--color-*)) causes a flash-then-grey bug on web because:
 *   1. The CSS variables render correctly for one frame (from global.css)
 *   2. React Native Web's JS hydration then overwrites with unresolved vars
 *   3. The var() calls return empty/transparent since RN StyleSheet ≠ CSSOM
 *
 * SOLUTION: Use plain hex values here. Dark mode is handled via the
 * GluestackUIProvider colorMode prop + useColorScheme(), not CSS vars.
 *
 * Source oklch values from Next.js global.css:
 *   --primary          oklch(0.648 0.2  131.684) → #5a9e2f
 *   --ring             oklch(0.841 0.238 128.85)  → #86efac
 *   --destructive      oklch(0.577 0.245  27.325) → #e5431a
 *   --background light oklch(1     0      0)      → #ffffff
 *   --background dark  oklch(0.141 0.005 285.823) → #1e1d22
 *   --muted            oklch(0.967 0.001 286.375) → #f4f4f5
 *   --muted-foreground oklch(0.552 0.016 285.938) → #71717a
 *   --border           oklch(0.92  0.004 286.32)  → #e4e4e7
 */

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{html,js,jsx,ts,tsx,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,mdx}',
    './utils/**/*.{html,js,jsx,ts,tsx,mdx}',
    './*.{html,js,jsx,ts,tsx,mdx}',
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // ── PRIMARY green ─────────────────────────────────────────
        // Midpoint: oklch(0.648 0.2 131.684) → #5a9e2f
        primary: {
          0:   '#ffffff',
          50:  '#f0fae8',
          100: '#d9f4c0',
          200: '#b8eb8a',
          300: '#8dd955',
          400: '#6ec236',
          500: '#5a9e2f', // ← brand green
          600: '#4a8226',
          700: '#3a661d',
          800: '#2c4e16',
          900: '#1e360e',
          950: '#112007',
        },

        // ── SECONDARY zinc neutral ────────────────────────────────
        // Light muted: oklch(0.967 0.001 286.375) → #f4f4f5
        secondary: {
          0:   '#ffffff',
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },

        // ── TERTIARY accent green (ring) ──────────────────────────
        // oklch(0.841 0.238 128.85) → #86efac at -300
        tertiary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac', // ← ring/accent
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },

        // ── ERROR / DESTRUCTIVE ───────────────────────────────────
        // oklch(0.577 0.245 27.325) → #e5431a
        error: {
          0:   '#ffffff',
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#e5431a', // ← destructive
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },

        // ── SUCCESS ───────────────────────────────────────────────
        success: {
          0:   '#ffffff',
          50:  '#f0fae8',
          100: '#d9f4c0',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#6ec236',
          500: '#5a9e2f',
          600: '#4a8226',
          700: '#3a661d',
          800: '#2c4e16',
          900: '#1e360e',
          950: '#112007',
        },

        // ── WARNING amber ─────────────────────────────────────────
        warning: {
          0:   '#ffffff',
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },

        // ── INFO blue ─────────────────────────────────────────────
        info: {
          0:   '#ffffff',
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },

        // ── TYPOGRAPHY ────────────────────────────────────────────
        // Foreground: oklch(0.141 0.005 285.823) → #1e1d22
        typography: {
          0:   '#ffffff',
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#1e1d22', // ← foreground dark
          white: '#ffffff',
          gray:  '#d4d4d8',
          black: '#1e1d22',
        },

        // ── OUTLINE / BORDER ──────────────────────────────────────
        // oklch(0.92 0.004 286.32) → #e4e4e7
        outline: {
          0:   '#ffffff',
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7', // ← border
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#1e1d22',
        },

        // ── BACKGROUND ────────────────────────────────────────────
        // Light: oklch(1 0 0) → #ffffff
        // Dark:  oklch(0.141 0.005 285.823) → #1e1d22
        background: {
          0:       '#ffffff',
          50:      '#fafafa',
          100:     '#f4f4f5',
          200:     '#e4e4e7',
          300:     '#d4d4d8',
          400:     '#a1a1aa',
          500:     '#71717a',
          600:     '#52525b',
          700:     '#3f3f46',
          800:     '#27272a',
          900:     '#18181b',
          950:     '#1e1d22', // ← dark bg
          error:   '#fee2e2',
          warning: '#fef3c7',
          muted:   '#f4f4f5', // ← oklch(0.967 0.001 286.375)
          success: '#d9f4c0',
          info:    '#dbeafe',
          light:   '#fbfbfb',
          dark:    '#1e1d22',
        },

        // ── INDICATOR ─────────────────────────────────────────────
        indicator: {
          primary: '#5a9e2f',
          info:    '#3b82f6',
          error:   '#e5431a',
        },
      },

      fontFamily: {
        heading:      undefined,
        body:         undefined,
        mono:         undefined,
        jakarta:      ['PlusJakartaSans'],
        roboto:       ['Roboto'],
        code:         ['SourceCodePro'],
        inter:        ['Inter'],
        'space-mono': ['SpaceMono'],
        philosopher:  ['Philosopher'],
      },

      fontWeight: {
        extrablack: '950',
      },

      fontSize: {
        '2xs': '10px',
      },

      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
    },
  },
};