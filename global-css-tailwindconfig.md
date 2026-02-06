### **1. Tailwind Configuration (`tailwind.config.js`)**

This config maps the custom colors and border radii to Tailwind utility classes (e.g., `bg-brand-orange` or `rounded-card`).

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#151313',
          orange: '#FF5734',
          purple: '#BE94F5',
          yellow: '#FCCC42',
          blue: '#B8E3F5', // Sampled from Psychology card
          offwhite: '#F7F7F5',
        },
      },
      fontFamily: {
        kodchassan: ['Kodchassan', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'card': '28px',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #151313',
      }
    },
  },
}

```

---

### **2. Global CSS Variables (`globals.css`)**

Use these for standard CSS or Styled Components to ensure consistency across the app.

```css
:root {
  /* Main Colors */
  --color-bg-main: #F7F7F5;
  --color-sidebar: #151313;
  --color-text-primary: #151313;
  
  /* Brand Accents */
  --color-primary-orange: #FF5734;
  --color-accent-purple: #BE94F5;
  --color-accent-yellow: #FCCC42;
  
  /* Borders & UI */
  --ui-border-width: 2px;
  --ui-border-color: #151313;
  --ui-radius-card: 28px;
  --ui-radius-button: 50px;
}

body {
  background-color: var(--color-bg-main);
  font-family: 'Kodchassan', sans-serif;
  color: var(--color-text-primary);
}

.neo-brutal-card {
  background: white;
  border: var(--ui-border-width) solid var(--ui-border-color);
  border-radius: var(--ui-radius-card);
  transition: transform 0.2s ease;
}

.neo-brutal-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0px var(--ui-border-color);
}

```

---

### **3. Layout & Component Mapping**

To guide the coding agent on structural hierarchy:

* **Sidebar:** `w-20` (collapsed) or `w-64` (expanded). Background `#151313`. Icons are centered with a `hover:bg-brand-yellow` effect for the active state indicator (the rounded square background).
* **Header:** Transparent or `bg-offwhite`. Uses a search bar with `rounded-full` and a subtle `border-2`.
* **Grid System:** The dashboard uses a 12-column grid.
* **Top Cards:** `col-span-4` each.
* **Bottom Left (Lessons):** `col-span-8`.
* **Bottom Right (Recommendation):** `col-span-4`.
