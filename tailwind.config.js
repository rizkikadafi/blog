module.exports = {
  darkMode: "class",
  content: [
    './*.{html, md, markdown}',
    './_posts/*.{html, md, markdown}',
    './_layouts/**/*.{html, md, markdown}',
    './_includes/**/*.{html, md, markdown}',
    './_drafts/**/*.{html, md, markdown}',
  ],
  theme: {
    extend: {
      // colors: {
      //   background: 'rgb(var(--background))',
      //   foreground: 'rgb(var(--foreground))',
      //   invert: 'rgb(var(--invert))',
      //   border: 'rgb(var(--border))',
      //   nav: 'rgb(var(--nav))',
      // },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        'hero1': "url('/assets/image/hero1.jpg')",
        'hero2': "url('/assets/image/hero2.jpg')",
        'radial-gradient-center': 'radial-gradient(at center, #334155 0%, transparent 40%)',
        'radial-gradient-top-left': 'radial-gradient(at top left, #334155 0%, transparent 60%)',
        'radial-gradient-center-left': 'radial-gradient(at center left, #334155 0%, transparent 60%)',
        'radial-gradient-bottom-left': 'radial-gradient(at bottom left, #334155 0%, transparent 60%)',
        'radial-gradient-top-right': 'radial-gradient(at top right, #334155 0%, transparent 60%)',
        'radial-gradient-center-right': 'radial-gradient(at center right, #334155 0%, transparent 60%)',
        'radial-gradient-bottom-right': 'radial-gradient(at bottom right, #334155 0%, transparent 60%)',
        'radial-gradient-center': 'radial-gradient(at center, #334155 0%, transparent 60%)',
        'radial-gradient-diagonal': 'radial-gradient(at top left, #334155 0%, transparent 60%), radial-gradient(at bottom right, #334155 0%, transparent 60%)',
        'radial-gradient-diagonal-reverse': 'radial-gradient(at top right, #334155 0%, transparent 60%), radial-gradient(at bottom left, #334155 0%, transparent 60%)',
      },
      boxShadow: {
        'custom': "4px 6px 8px 0px rgba(0, 0, 0, 0.3)",
        'custom-lg': "4px 6px 15px 0px rgba(0, 0, 0, 0.5)",
        'custom-xl': "0px 0px 30px 5px rgba(0, 0, 0, 0.6)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

