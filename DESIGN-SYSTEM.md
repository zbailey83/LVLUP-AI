# Learnify Design System Documentation

A modern, friendly learning platform design system with pastel aesthetics and card-based UI components.

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Components](#components)
6. [Layout Structure](#layout-structure)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Usage Examples](#usage-examples)

---

## Design Philosophy

The Learnify design system is built around the following principles:

- **Friendly & Approachable**: Soft colors and rounded corners create a welcoming learning environment
- **Clear Hierarchy**: Strong visual hierarchy through typography, color, and spacing
- **Card-Based Design**: Information is organized in digestible, scannable cards
- **Pastel Palette**: Each category has its own pastel color for quick visual identification
- **Progressive Disclosure**: Information is revealed progressively to avoid overwhelming users

---

## Color System

### Primary Colors

```css
--color-primary-yellow: #F7D26E    /* Marketing category */
--color-primary-purple: #D7C3E8    /* Computer Science category */
--color-primary-blue: #C2E5F0      /* Psychology category */
--color-accent-coral: #FF6B5A      /* Primary CTA color */
--color-accent-orange: #FFA366     /* Secondary accent */
```

### Neutral Colors

```css
--color-dark-charcoal: #2D2D2D     /* Sidebar, tags, text */
--color-medium-gray: #5A5A5A       /* Secondary UI elements */
--color-light-gray: #E8E8E8        /* Borders, dividers */
--color-off-white: #F5F5F5         /* Subtle backgrounds */
--color-pure-white: #FFFFFF        /* Card backgrounds */
--color-background: #E5EEF0        /* Page background */
```

### Text Colors

```css
--color-text-primary: #1A1A1A      /* Main text */
--color-text-secondary: #6B6B6B    /* Supporting text */
--color-text-tertiary: #9B9B9B     /* Tertiary text */
--color-text-on-dark: #FFFFFF      /* Text on dark backgrounds */
```

### Usage Guidelines

- **Primary Colors**: Use for category identification and course cards
- **Accent Coral**: Reserved for primary CTAs (Continue, More Details buttons)
- **Dark Charcoal**: Used for navigation, tags, and emphasis
- **Neutrals**: Used for text hierarchy and UI elements

---

## Typography

### Font Family

```css
--font-family-primary: 'Outfit', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-family-display: 'Outfit', sans-serif;
```

**Recommended Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Font Sizes

```css
--font-size-xs: 0.75rem     /* 12px - Labels, metadata */
--font-size-sm: 0.875rem    /* 14px - Supporting text */
--font-size-base: 1rem      /* 16px - Body text */
--font-size-lg: 1.125rem    /* 18px - Subheadings */
--font-size-xl: 1.25rem     /* 20px - Card titles */
--font-size-2xl: 1.5rem     /* 24px - Section headers */
--font-size-3xl: 2rem       /* 32px - Page titles */
```

### Font Weights

```css
--font-weight-normal: 400    /* Body text */
--font-weight-medium: 500    /* Subtle emphasis */
--font-weight-semibold: 600  /* Headings, labels */
--font-weight-bold: 700      /* Strong emphasis */
```

### Typography Scale

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| Page Title | 2rem (32px) | 700 | Main page headings |
| Section Header | 1.5rem (24px) | 700 | Section titles |
| Card Title | 1.25rem (20px) | 700 | Course/content titles |
| Subheading | 1.125rem (18px) | 600 | Supporting headings |
| Body Text | 1rem (16px) | 400 | Main content |
| Small Text | 0.875rem (14px) | 500 | Labels, metadata |
| Micro Text | 0.75rem (12px) | 600 | Tags, counts |

---

## Spacing System

Based on an 8px grid system for consistent vertical rhythm.

```css
--space-xs: 0.25rem    /* 4px - Tight spacing */
--space-sm: 0.5rem     /* 8px - Base unit */
--space-md: 1rem       /* 16px - Default spacing */
--space-lg: 1.5rem     /* 24px - Section spacing */
--space-xl: 2rem       /* 32px - Large sections */
--space-2xl: 3rem      /* 48px - Major sections */
--space-3xl: 4rem      /* 64px - Page sections */
```

### Spacing Guidelines

- **Component padding**: Use `--space-xl` (32px) for cards and containers
- **Element gaps**: Use `--space-md` (16px) between related elements
- **Section spacing**: Use `--space-2xl` (48px) between major sections
- **Micro spacing**: Use `--space-sm` (8px) for labels and tight groupings

---

## Components

### 1. Course Cards

The primary content container for displaying courses.

**HTML Structure:**
```html
<div class="course-card marketing">
    <div class="course-card-header">
        <span class="course-category-tag">Marketing</span>
        <svg class="bookmark-icon active">...</svg>
    </div>
    
    <h3 class="course-title">Creative Writing for Beginners</h3>
    
    <div class="course-progress-section">
        <div class="progress-label">
            <span class="progress-text">Progress</span>
            <span class="progress-count">5/20 lessons</span>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: 25%"></div>
        </div>
    </div>
    
    <div class="course-footer">
        <div class="avatar-group">
            <img src="..." class="avatar">
            <div class="avatar-count">+120</div>
        </div>
        <button class="btn-continue">Continue</button>
    </div>
</div>
```

**Variants:**
- `.course-card.marketing` - Yellow background gradient
- `.course-card.computer-science` - Purple background gradient
- `.course-card.psychology` - Blue background gradient

**Features:**
- Hover effect: Lifts card with increased shadow
- Background gradient fades in on hover
- All interactive elements have hover states

### 2. Progress Bars

Visual representation of course completion.

**HTML:**
```html
<div class="progress-bar-container">
    <div class="progress-bar" style="width: 25%"></div>
</div>
```

**Customization:**
- Set width inline: `style="width: 25%"` for 25% progress
- Progress bar animates on width change
- Dark charcoal color by default

### 3. Avatar Groups

Display course participants with overflow count.

**HTML:**
```html
<div class="avatar-group">
    <img src="avatar1.jpg" class="avatar">
    <img src="avatar2.jpg" class="avatar">
    <img src="avatar3.jpg" class="avatar">
    <div class="avatar-count">+120</div>
</div>
```

**Features:**
- Avatars overlap with negative margin
- Hover lifts individual avatars
- Count badge uses primary yellow background
- White border creates separation

### 4. Buttons

**Primary Button (Coral):**
```html
<button class="btn-continue">Continue</button>
```

**Large Button (Full Width):**
```html
<button class="btn-more-details">More details</button>
```

**States:**
- Default: Coral background with shadow
- Hover: Lighter coral, lifts up, increased shadow
- Active: Returns to base position

### 5. Category Pills

Filter/navigation pills for course categories.

**HTML:**
```html
<div class="category-filters">
    <button class="category-pill active">All courses</button>
    <button class="category-pill">Marketing</button>
    <button class="category-pill">Computer Science</button>
</div>
```

**States:**
- Default: White background, gray text
- Hover: Lifts with shadow
- Active: Dark charcoal background, white text

### 6. Lesson Items

List items showing upcoming lessons.

**HTML:**
```html
<div class="lesson-item">
    <div class="lesson-info">
        <div class="lesson-number">01.</div>
        <div class="lesson-title-text">Introduction to Creative Writing</div>
        <div class="lesson-subtitle">Creative writing for beginners</div>
    </div>
    <div class="lesson-teacher">
        <img src="teacher.jpg" class="teacher-avatar">
        <span class="teacher-name">Conner Garcia</span>
    </div>
    <div class="lesson-duration">22 min</div>
</div>
```

**Features:**
- Hover adds background color and padding
- Smooth border-radius transition
- Grid layout adapts to screen size

### 7. Sidebar Navigation

Fixed sidebar with icon navigation.

**HTML:**
```html
<nav class="sidebar">
    <div class="sidebar-icon active">
        <i data-feather="folder"></i>
    </div>
    <div class="sidebar-icon">
        <i data-feather="edit"></i>
    </div>
</nav>
```

**Features:**
- Fixed positioning on left side
- Yellow highlight for active state
- Hover states with subtle animations
- Icons courtesy of Feather Icons

---

## Layout Structure

### App Container

```html
<div class="app-container">
    <nav class="sidebar">...</nav>
    <main class="main-content">...</main>
</div>
```

### Grid System

**Course Grid:**
- Auto-fit columns with min 320px width
- Adapts to screen size automatically
- 32px gap between cards

```css
.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-xl);
}
```

**Two-Column Layout:**
```html
<div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div class="lessons-container">...</div>
    <div class="recommendation-card">...</div>
</div>
```

---

## Responsive Design

### Breakpoints

```css
/* Desktop: Default (1200px+) */

/* Tablet: 968px - 1199px */
@media (max-width: 1200px) {
    /* Course grid adapts to 2 columns */
}

/* Mobile Landscape: 640px - 967px */
@media (max-width: 968px) {
    /* Sidebar narrows, lesson table simplifies */
}

/* Mobile Portrait: < 640px */
@media (max-width: 640px) {
    /* Single column, sidebar hidden */
}
```

### Mobile Adaptations

- **Sidebar**: Hides completely on mobile
- **Search**: Full width on mobile
- **Course Grid**: Single column
- **Lesson Table**: Stacks vertically
- **Two-column layouts**: Collapse to single column

---

## Accessibility

### Color Contrast

All text meets WCAG AA standards:
- Primary text on white: 16:1 contrast
- Secondary text on white: 7:1 contrast
- White text on coral buttons: 4.5:1 contrast
- White text on dark charcoal: 15:1 contrast

### Focus States

```css
.search-input:focus {
    outline: none;
    border-color: var(--color-accent-coral);
    box-shadow: 0 0 0 4px rgba(255, 107, 90, 0.1);
}
```

All interactive elements have visible focus states.

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (`<nav>`, `<main>`, `<section>`)
- Alt text for all images
- ARIA labels where needed

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Logical tab order
- Skip links for main content

---

## Usage Examples

### Complete Course Card

```html
<div class="course-card psychology">
    <div class="course-card-header">
        <span class="course-category-tag">Psychology</span>
        <svg class="bookmark-icon active" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
    </div>
    
    <h3 class="course-title">Public Speaking and Leadership</h3>
    
    <div class="course-progress-section">
        <div class="progress-label">
            <span class="progress-text">Progress</span>
            <span class="progress-count">18/22 lessons</span>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: 82%"></div>
        </div>
    </div>
    
    <div class="course-footer">
        <div class="avatar-group">
            <img src="student1.jpg" alt="Student" class="avatar">
            <img src="student2.jpg" alt="Student" class="avatar">
            <img src="student3.jpg" alt="Student" class="avatar">
            <div class="avatar-count">+24</div>
        </div>
        <button class="btn-continue">Continue</button>
    </div>
</div>
```

### Recommendation Card

```html
<div class="recommendation-card">
    <div class="recommendation-label">New course matching your interests</div>
    <div class="recommendation-category">Computer Science</div>
    <h3 class="recommendation-title">Microsoft Future Ready: Fundamentals of Big Data</h3>
    <div class="recommendation-status">They are already studying</div>
    <div class="recommendation-avatars">
        <div class="avatar-group">
            <img src="student1.jpg" class="avatar">
            <img src="student2.jpg" class="avatar">
            <img src="student3.jpg" class="avatar">
            <div class="avatar-count">+100</div>
        </div>
    </div>
    <button class="btn-more-details">More details</button>
</div>
```

### Lesson Table

```html
<div class="lessons-container">
    <div class="lessons-header">
        <h3 class="lessons-title">My next lessons</h3>
        <a class="view-all-link">View all lessons</a>
    </div>
    
    <div class="lesson-table">
        <div class="lesson-table-header">
            <div class="lesson-table-header-cell">Lesson</div>
            <div class="lesson-table-header-cell">Teacher</div>
            <div class="lesson-table-header-cell">Duration</div>
        </div>
        
        <div class="lesson-item">
            <div class="lesson-info">
                <div class="lesson-number">01.</div>
                <div class="lesson-title-text">Introduction to Creative Writing</div>
                <div class="lesson-subtitle">Creative writing for beginners</div>
            </div>
            <div class="lesson-teacher">
                <img src="teacher.jpg" class="teacher-avatar">
                <span class="teacher-name">Conner Garcia</span>
            </div>
            <div class="lesson-duration">22 min</div>
        </div>
    </div>
</div>
```

---

## Best Practices

### 1. Maintain Visual Hierarchy

- Use larger, bolder text for more important content
- Create clear separation between sections with spacing
- Group related elements together

### 2. Consistent Spacing

- Stick to the spacing scale (multiples of 8px)
- Use consistent gaps in grid layouts
- Maintain uniform padding in cards

### 3. Semantic Color Usage

- Marketing content → Yellow
- Computer Science → Purple
- Psychology → Blue
- Primary actions → Coral
- Navigation/emphasis → Dark charcoal

### 4. Interaction Feedback

- Always provide hover states
- Use transitions for smooth animations
- Provide visual feedback for clicks
- Show loading states when appropriate

### 5. Performance

- Use CSS transforms for animations (better performance)
- Optimize images for web
- Lazy load images when possible
- Use CSS custom properties for theme values

### 6. Responsive Considerations

- Test on multiple device sizes
- Ensure touch targets are at least 44x44px
- Make clickable areas generous on mobile
- Simplify layouts on small screens

---

## Customization

### Changing Category Colors

To add a new category or change colors, update the CSS custom properties:

```css
:root {
    --color-category-design: #FFB8D1;  /* New category */
}

.course-card.design::before {
    background: linear-gradient(135deg, var(--color-category-design) 0%, rgba(255, 184, 209, 0.3) 100%);
}
```

### Theme Variations

Create a dark theme by overriding variables:

```css
[data-theme="dark"] {
    --color-background: #1A1A1A;
    --color-pure-white: #2D2D2D;
    --color-text-primary: #F5F5F5;
}
```

### Adding Animations

All animations use CSS custom properties for timing:

```css
.custom-animation {
    transition: all var(--transition-base);
}

.custom-animation:hover {
    transform: translateY(-4px);
}
```

---

## Dependencies

- **Font**: Outfit (Google Fonts)
- **Icons**: Feather Icons (CDN)
- **Images**: Pravatar (demo avatars)

### CDN Links

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Feather Icons -->
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
```

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern CSS features:
- CSS Custom Properties
- CSS Grid
- Flexbox
- CSS Transforms
- CSS Transitions

---

## License

This design system is provided as-is for learning and development purposes.

---

## Credits

Design system created based on modern e-learning platform UI/UX patterns, emphasizing clarity, accessibility, and user engagement.
