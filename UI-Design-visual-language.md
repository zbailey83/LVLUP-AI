This is the final, comprehensive technical package. It combines the visual philosophy, the design tokens, and the responsive architecture required for a coding agent to build the **Learnify** platform from scratch.

---

## 📘 Part 1: The Visual Language (.md)

### **1. The "Learnify" Aesthetic**

The platform uses **Neo-Brutalist Minimalism**. It rejects gradients and soft shadows in favor of:

* **High Contrast:** Pure black (`#151313`) borders and shadows.
* **Flat Depth:** Elements use a hard 4px offset to simulate depth (the "Neo-Shadow").
* **Playful Geometry:** Large border-radii (`28px`) to soften the aggressive black borders.
* **Pastel Categorization:** Each course category is color-coded to aid navigation.

### **2. Color Matrix**

| Role | Hex | Tailwind Class |
| --- | --- | --- |
| **Primary Black** | `#151313` | `bg-brand-black` |
| **Base Background** | `#F7F7F5` | `bg-brand-offwhite` |
| **Accent (Marketing)** | `#FCCC42` | `bg-brand-yellow` |
| **Accent (CS/Tech)** | `#BE94F5` | `bg-brand-purple` |
| **Accent (Psychology)** | `#B8E3F5` | `bg-brand-blue` |
| **Action / Play** | `#FF5734` | `bg-brand-orange` |

---

## 🛠️ Part 2: The Developer Config (`style-guide.json`)

```json
{
  "theme": "Learnify-NeoBrutalism",
  "config": {
    "spacing_unit": 4,
    "border_width": "2px",
    "shadow_offset": "4px",
    "font_family": "Kodchassan, sans-serif"
  },
  "tokens": {
    "colors": {
      "black": "#151313",
      "white": "#FFFFFF",
      "offwhite": "#F7F7F5",
      "orange": "#FF5734",
      "yellow": "#FCCC42",
      "purple": "#BE94F5",
      "blue": "#B8E3F5"
    },
    "radius": {
      "xl": "28px",
      "lg": "16px",
      "full": "9999px"
    }
  },
  "breakpoints": {
    "mobile": "0px",
    "tablet": "768px",
    "desktop": "1024px"
  }
}

```

---

## 🏗️ Part 3: Responsive Architecture

To ensure the agent builds correctly across devices, we use a **3-Tier Grid System**:

### **Desktop (1024px+)**

* **Sidebar:** Fixed `80px` width.
* **Main Container:** `calc(100% - 80px)` with `max-width: 1400px` centered.
* **Dashboard Grid:** 3-column top row, 12-column bottom layout (8-col content / 4-col stats).

### **Tablet (768px - 1023px)**

* **Sidebar:** Hidden; replaced by a **Bottom Navigation Bar** or a side-drawer.
* **Grid:** 2-column layout for course cards. Sidebar icons move to the top header.

### **Mobile (<768px)**

* **Sidebar:** Hamburger menu.
* **Grid:** 1-column (full width) stack.
* **Typography:** Scale headers down (e.g., `text-4xl` becomes `text-2xl`).

---

## 📺 Part 4: Video Player & Lesson View

The second view (Course Video Dashboard) introduces a **Cinema Mode** layout:

* **Primary Column (70%):** Large video player with `aspect-video` and a `rounded-card` border. Below this, the "About" and "Reviews" tabs.
* **Secondary Column (30%):** The "Course Content" accordion list.
* **Style:** Items should have a subtle border and use the **Orange** color for the currently playing lesson icon.



---

## 🚀 Part 5: Component Implementation (Tailwind)

Add this to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#151313',
          offwhite: '#F7F7F5',
          orange: '#FF5734',
          yellow: '#FCCC42',
          purple: '#BE94F5',
          blue: '#B8E3F5',
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #151313',
        'neo-sm': '2px 2px 0px 0px #151313',
      },
      borderRadius: {
        'card': '28px',
      }
    }
  }
}

```

### **The "Neo-Brutal" CSS Utility**

```css
/* Add to your base CSS */
.btn-primary {
  @apply bg-brand-orange text-white border-2 border-brand-black rounded-full 
         px-6 py-2 font-bold transition-all active:translate-y-1 active:shadow-none;
  box-shadow: 4px 4px 0px #151313;
}

.card-container {
  @apply bg-white border-2 border-brand-black rounded-card p-6;
}

```

---
