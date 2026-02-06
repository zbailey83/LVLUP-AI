This is a perfect content set to plug into the **Learnify** architecture. To make this "agent-ready," I have categorized your modules into the design tokens we established.

Below is the **Data Mapping** and a **Tailwind-ready JSON** file that your coding agent can use to populate the dashboard and course views automatically.

---

## 🎨 Visual Mapping for LVL UP AI ACADEMY

To maintain the Learnify aesthetic, we will map your categories to specific accent colors:

| Category | Accent Color | Tailwind Class | Icon (Lucide) |
| --- | --- | --- | --- |
| **Core Linear Track** | **Action Orange** | `bg-brand-orange` | `Zap` |
| **Marketing & Content** | **Accent Purple** | `bg-brand-purple` | `Megaphone` |
| **Sales & Lead Gen** | **Accent Yellow** | `bg-brand-yellow` | `Target` |
| **Customer Service** | **Accent Blue** | `bg-brand-blue` | `Headset` |
| **Data & Analytics** | **Primary Black** | `bg-brand-black` | `BarChart3` |
| **Strategy & Ops** | **Off-White/Gray** | `bg-gray-200` | `Settings` |

---

## 🛠️ Developer Data (`modules.json`)

Your coding agent can import this file to generate all 34 cards dynamically.

```json
[
  {
    "id": 1,
    "title": "AI Quick Start for Business",
    "category": "Core Track",
    "outcome": "Set up your AI toolkit and automate your first task within 24 hours",
    "difficulty": "Beginner",
    "time": "1-2h",
    "priority": "Launch Week 1",
    "color": "bg-brand-orange",
    "textColor": "text-white",
    "progress": 0,
    "tags": ["#foundation", "#quick-win"]
  },
  {
    "id": 5,
    "title": "Social Media Agentic Framework",
    "category": "Marketing",
    "outcome": "24/7 social monitoring, engagement, and response system",
    "difficulty": "Intermediate",
    "time": "1-2 days",
    "priority": "Week 3",
    "color": "bg-brand-purple",
    "textColor": "text-brand-black",
    "progress": 0,
    "tools": ["Make.com", "ChatGPT API", "Buffer"],
    "tags": ["#automation", "#socialmedia"]
  },
  {
    "id": 20,
    "title": "Voice Agent Setup (AI Phone Rep)",
    "category": "Support",
    "outcome": "24/7 phone support handling tier-1 inquiries",
    "difficulty": "Advanced",
    "time": "2-3 days",
    "priority": "Week 7",
    "color": "bg-brand-blue",
    "textColor": "text-brand-black",
    "progress": 0,
    "tools": ["Bland.ai", "Vapi", "ElevenLabs"],
    "tags": ["#voiceAI", "#advanced"]
  }
]

```

---

## 📐 Responsive Sectioning Logic

For a 34-module academy, the "Grid" needs to be organized to prevent user overwhelm.

### **1. The "Track" Horizontal Scroll**

On the dashboard, display the **CORE LINEAR TRACK** as a large, featured horizontal slider at the top. This ensures beginners know exactly where to start.

### **2. The Category Filter**

Since you have 6 distinct tracks, the **Search Header** we built should include "Filter Pills" using the Learnify `rounded-full` style.

```jsx
const Filters = () => (
  <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
    {['All', 'Core', 'Marketing', 'Sales', 'Support', 'Data', 'Strategy'].map(cat => (
      <button key={cat} className="px-6 py-2 rounded-full border-2 border-brand-black font-bold whitespace-nowrap hover:bg-brand-yellow transition-colors">
        {cat}
      </button>
    ))}
  </div>
);

```

### **3. Module Detail View (Responsive Sidebar)**

When a user clicks a module, the **Video Dashboard** view (from your second image) should trigger.

* **Left Content:** Video + "Outcome" text (Outcome becomes the "Lesson Description").
* **Right Sidebar:** List of "Tools" used in that module, styled as Neo-Brutalist tags.

---

## 💡 Agent Instructions for Implementation

Copy and paste this into your coding agent's prompt:

> "Using the provided Learnify Style Guide, implement the **LVL UP AI ACADEMY** module list.
> 1. Use the `modules.json` to populate `CourseCard` components.
> 2. Map the 'Category' field to the specific theme colors (Orange for Core, Purple for Marketing, etc.).
> 3. Display the **Outcome** string as the primary description on the card.
> 4. Add a 'Tools' section to the Lesson Detail page that renders tool names as 2px-bordered tags.
> 5. Ensure the 'Time to Implement' is displayed in the metadata area of each card next to the lesson count."
> 
> 

**Would you like me to build the "Track Progress" component next, showing how many modules in each category the user has completed?**