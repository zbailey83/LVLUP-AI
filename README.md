# LVL UP AI ACADEMY - Dashboard Implementation

A Neo-Brutalist learning platform built with React and Tailwind CSS, featuring 34 AI automation modules across 6 categories.

## 🎨 Design System

Based on the Learnify aesthetic with:
- **Neo-Brutalist** style (bold borders, flat shadows)
- **Category color coding** for visual navigation
- **Responsive** mobile-first design
- **Kodchassan** font family

## 📁 Project Structure

```
├── App.jsx                    # Main app with routing logic
├── ModuleDashboard.jsx        # Main dashboard with filters
├── ModuleDetailView.jsx       # Individual module detail page
├── ModuleCard.jsx             # Reusable module card component
├── Sidebar.jsx                # Navigation sidebar
├── CourseCard.jsx             # Original course card (reference)
├── DashboardLayout.jsx        # Original dashboard (reference)
├── ResponsiveLayout.jsx       # Responsive patterns (reference)
├── modules.json               # All 34 module data
├── global.css                 # Tailwind + custom utilities
├── tailwind.config.js         # Theme configuration
└── style-guide.json           # Design tokens
```

## 🚀 Features

### Module Dashboard
- **Core Linear Track** horizontal scroll (4 beginner modules)
- **Category filters** (Core, Marketing, Sales, Support, Data, Strategy)
- **Search functionality** across titles and outcomes
- **Quick Wins section** showing modules under 2 hours
- **Progress tracker** by category

### Module Detail View
- Video player placeholder
- Tabbed content (About, Tools, Resources)
- Course content sidebar with lesson list
- Module metadata (duration, difficulty, category)
- Tools showcase with Neo-Brutalist tags

### Color Mapping
- **Core Track**: Orange (`#FF5734`)
- **Marketing**: Purple (`#BE94F5`)
- **Sales**: Yellow (`#FCCC42`)
- **Support**: Blue (`#B8E3F5`)
- **Data**: Black (`#151313`)
- **Strategy**: Gray (`#E5E5E5`)

## 🛠️ Usage

```jsx
import App from './App';

// The App component handles routing between dashboard and detail views
<App />
```

## 📊 Module Data Structure

Each module in `modules.json` includes:
```json
{
  "id": 1,
  "title": "Module Title",
  "category": "Core Track",
  "outcome": "What you'll achieve",
  "difficulty": "Beginner|Intermediate|Advanced",
  "time": "1-2h",
  "priority": "Week X",
  "color": "bg-brand-orange",
  "textColor": "text-white",
  "progress": 0,
  "tools": ["Tool1", "Tool2"],
  "tags": ["#tag1", "#tag2"]
}
```

## 🎯 Next Steps

1. **Add video content** to ModuleDetailView
2. **Implement progress tracking** with localStorage
3. **Add user authentication**
4. **Create lesson content pages**
5. **Build completion certificates**
6. **Add community features**

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

Built with the existing Learnify components and design system.
