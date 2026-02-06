# LVL UP AI ACADEMY - Implementation Guide

## 🚀 Quick Start

This project is built with React and Tailwind CSS, following the Learnify Neo-Brutalist design system.

### Prerequisites
- Node.js 16+
- npm or yarn
- React 18+
- Tailwind CSS 3+

### Installation

1. **Install dependencies:**
```bash
npm install react react-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
```

2. **Initialize Tailwind:**
```bash
npx tailwindcss init
```

3. **Configure Tailwind** (use the provided `tailwind.config.js`)

4. **Import global styles** in your main entry point:
```jsx
import './global.css';
```

## 📁 Component Overview

### Core Components

#### `App.jsx`
Main application router handling three views:
- Learning Paths selection
- Module Dashboard
- Module Detail View

#### `LearningPaths.jsx`
Landing page with 6 curated learning paths:
- The Content Machine
- The Sales Automator
- Customer Service Transformer
- The Marketing Multiplier
- The Data-Driven Leader
- The Efficiency Expert

#### `ModuleDashboard.jsx`
Main dashboard featuring:
- Core Track horizontal scroll
- Category filters
- Search functionality
- Quick Wins section
- Progress tracker

#### `ResponsiveModuleDashboard.jsx`
Mobile-optimized version with:
- Hamburger menu
- Collapsible filters
- Touch-friendly cards
- Responsive grid

#### `ModuleCard.jsx`
Reusable card component displaying:
- Module title & category
- Outcome description
- Difficulty badge
- Time estimate
- Tools used
- Tags

#### `ModuleDetailView.jsx`
Individual module page with:
- Video player placeholder
- Tabbed content (About, Tools, Resources)
- Lesson list sidebar
- Start button

### Supporting Components

#### `Sidebar.jsx`
Fixed navigation with icons for:
- Dashboard
- Courses
- Messages
- Community
- Settings

#### `CourseCard.jsx`, `DashboardLayout.jsx`, `ResponsiveLayout.jsx`
Reference components from original Learnify design

## 🎨 Design System

### Colors
```js
brand: {
  black: '#151313',
  orange: '#FF5734',
  purple: '#BE94F5',
  yellow: '#FCCC42',
  blue: '#B8E3F5',
  offwhite: '#F7F7F5',
}
```

### Custom CSS Classes

#### `.neo-brutal-card`
```css
bg-white border-2 border-brand-black rounded-card
box-shadow: 4px 4px 0px 0px #151313
```

#### `.filter-pill`
```css
px-6 py-2 rounded-full border-2 border-brand-black
```

#### `.btn-primary`
```css
bg-brand-orange text-white border-2 border-brand-black rounded-full
box-shadow: 4px 4px 0px #151313
```

## 📊 Data Structure

### modules.json
Contains 34 modules with structure:
```json
{
  "id": 1,
  "title": "Module Title",
  "category": "Core Track | Marketing | Sales | Support | Data | Strategy",
  "outcome": "What you'll achieve",
  "difficulty": "Beginner | Intermediate | Advanced",
  "time": "1-2h",
  "priority": "Week X",
  "color": "bg-brand-orange",
  "textColor": "text-white",
  "progress": 0,
  "tools": ["Tool1", "Tool2"],
  "tags": ["#tag1", "#tag2"]
}
```

## 🔧 Customization

### Adding New Modules
1. Add module object to `modules.json`
2. Assign appropriate category and color
3. Module will automatically appear in dashboard

### Creating New Learning Paths
Edit `LearningPaths.jsx` and add to the `paths` array:
```jsx
{
  id: 'path-id',
  name: 'Path Name',
  description: 'Description',
  icon: IconComponent,
  color: 'bg-brand-color',
  textColor: 'text-color',
  modules: [1, 2, 3], // Module IDs
  duration: '2-3 weeks',
  difficulty: 'Beginner'
}
```

### Styling Modifications
All custom styles are in `global.css` using Tailwind's `@layer` directive.

## 📱 Responsive Behavior

### Desktop (≥1024px)
- Fixed sidebar (80px width)
- 3-column module grid
- 8/4 split for content/stats

### Tablet (768px - 1023px)
- Collapsible sidebar
- 2-column module grid
- Stacked content sections

### Mobile (<768px)
- Hamburger menu
- 1-column module grid
- Collapsible filters
- Touch-optimized cards

## 🎯 Next Steps

### Phase 1: Core Functionality
- [ ] Add video player integration
- [ ] Implement progress tracking (localStorage)
- [ ] Add lesson content pages
- [ ] Create quiz/assessment system

### Phase 2: User Features
- [ ] User authentication
- [ ] Profile management
- [ ] Bookmark/favorite modules
- [ ] Notes and annotations

### Phase 3: Social Features
- [ ] Community forum
- [ ] User comments/reviews
- [ ] Completion certificates
- [ ] Leaderboards

### Phase 4: Advanced
- [ ] AI-powered recommendations
- [ ] Adaptive learning paths
- [ ] Live cohort features
- [ ] Integration with external tools

## 🐛 Troubleshooting

### Tailwind classes not working
- Ensure `global.css` is imported
- Check `tailwind.config.js` extends are correct
- Verify PostCSS is configured

### Module cards not displaying
- Check `modules.json` is in the correct location
- Verify JSON syntax is valid
- Check browser console for import errors

### Responsive layout issues
- Test breakpoints in browser DevTools
- Verify Tailwind responsive prefixes (sm:, md:, lg:)
- Check for conflicting CSS

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)

Built with ❤️ using the Learnify design system.
