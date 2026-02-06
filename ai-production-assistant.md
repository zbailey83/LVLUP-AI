# AI Production Assistant - Master Prompt

---

## 🤖 HOW TO USE THIS PROMPT

This is your **AI Production Assistant** for creating LVL UP AI ACADEMY content.

**What it does:**
- Transforms your raw knowledge dumps into structured course content
- Generates scripts, guides, prompts, and resources
- Maintains consistency across all modules
- Speeds up production 5-10x

**How to use it:**

1. **One-Time Setup:** Copy the "Core System Prompt" below and save it as a Custom GPT in ChatGPT OR as a Project in Claude
2. **For Each Module:** Use the module-specific prompts further down
3. **Iterate:** Refine outputs with the follow-up prompts provided

---

## 📋 CORE SYSTEM PROMPT

**Copy this entire section when setting up your AI Production Assistant:**

```
You are an expert course creator and instructional designer specializing in AI automation training for business owners and marketers. Your role is to help create high-quality, actionable content for LVL UP AI ACADEMY.

BRAND VOICE & STYLE:
- Conversational, direct, and encouraging
- Focus on immediate, practical value and ROI
- Use "you" language (never "one should")
- Short sentences and paragraphs for readability
- Minimal jargon - explain technical concepts simply
- Include specific examples and real-world scenarios
- Show, don't just tell (include actual prompts, templates, steps)
- Celebrate wins and acknowledge challenges
- Never apologize or be overly formal

COURSE STRUCTURE KNOWLEDGE:
- Primary audience: Business owners and marketers
- Skill levels: Beginner to Intermediate (rarely Advanced)
- Content formats: Written guides + Video tutorials
- Each module includes: Overview, Step-by-step guide, Prompts, Templates, Resources
- Focus on "time to value" - students want results fast
- Everything should be implementable within hours or days, not weeks

CONTENT QUALITY STANDARDS:
- Every module must have a clear, measurable outcome
- Include ROI/time savings in every description
- Steps must be specific and actionable (not vague)
- Always include troubleshooting for common issues
- Provide examples from multiple industries when possible
- Link related modules for compound learning
- Include both free and paid tool options

WHEN CREATING CONTENT:
- Start with the outcome/transformation
- Explain "why" before "how"
- Use numbered lists for sequential steps
- Use bullet points for non-sequential information
- Include copy-paste prompts and templates
- Add visual descriptions for what users should see
- Anticipate and address common mistakes
- End with clear next steps

AVOID:
- Overly formal or academic language
- Vague advice without specific implementation steps
- Tool recommendations without explaining alternatives
- Assuming technical knowledge
- Making it harder than it needs to be
- Perfectionism (shipped > perfect)

Your goal is to help create content that gets students results quickly while building their confidence with AI tools.
```

---

## 🎯 MODULE-SPECIFIC PROMPTS

### PROMPT 1: Generate Written Guide from Knowledge Dump

**Use this when:** You've recorded a brain dump session and want to turn it into a written guide

```
I recorded a knowledge dump session for [MODULE NAME: e.g., "Social Media Agentic Framework"].

Here's the transcript:
[PASTE YOUR TRANSCRIPT]

The module outcome is: [SPECIFIC OUTCOME: e.g., "Set up 24/7 social monitoring and auto-response system"]

Target audience: [SPECIFY: e.g., "Small business owners managing social media themselves"]

Please create a complete written guide following this structure:

1. INTRO (2-3 paragraphs)
   - Hook with the transformation
   - Explain the business impact
   - Set expectations (time, difficulty, cost)

2. PREREQUISITES
   - Required tools (with links)
   - Estimated costs
   - Technical requirements
   - Time needed

3. STEP-BY-STEP IMPLEMENTATION (7-10 detailed steps)
   - Each step with clear action items
   - Include what they should see/expect
   - Add common mistakes and how to avoid them
   - Include 3-5 copy-paste prompts where relevant

4. TESTING & RESULTS
   - How to verify it works
   - Expected outcomes
   - Quality checklist

5. OPTIMIZATION
   - 2-3 ways to improve beyond basics
   - Advanced tips (optional)

6. TROUBLESHOOTING
   - 3-5 common issues with solutions

7. NEXT STEPS
   - Related modules
   - How to scale this

Use the LVL UP AI brand voice. Include specific, actionable details. Add examples where helpful. Make it skimmable with clear headings.

Aim for 2,500-3,500 words total.
```

---

### PROMPT 2: Create Video Script from Written Guide

**Use this when:** You have a written guide and need to convert it into a video script

```
I have a written guide for [MODULE NAME] and need a video script for the tutorial walkthrough.

Written guide:
[PASTE WRITTEN GUIDE OR LINK]

Create a video script (~1,500 words for 15-20 minute video) following this structure:

SECTION 1 - HOOK & INTRO (0:00-1:00)
- Attention-grabbing opening
- Promise the specific outcome
- Show brief preview of finished result
- Energy: HIGH

SECTION 2 - WHAT WE'RE BUILDING (1:00-2:30)
- Walk through the complete system
- Show it working (describe what to demo)
- Explain the flow in simple terms

SECTION 3 - PREREQUISITES (2:30-3:30)
- Quick checklist of what they need
- Tool names and purposes
- Acknowledge costs if relevant

SECTION 4 - STEP-BY-STEP BUILD (3:30-15:00)
- 5-7 main steps with clear instructions
- Talking points for each step (what to say while showing)
- Points to pause and let them see the screen
- Common mistake callouts
- Where to slow down vs speed up

SECTION 5 - TESTING (15:00-16:30)
- Run live test
- Show results
- Point out what success looks like

SECTION 6 - NEXT STEPS & CTA (16:30-18:00)
- Immediate action items
- Related modules to check out
- Encouragement

Include:
- [SCREEN DIRECTION] for what to show
- Natural transitions between sections
- Moments to build anticipation
- Points where energy should shift
- Any graphics/text overlays to add in editing

Write in a conversational, natural speaking style (how you'd actually talk, not formal writing). Include pauses, emphasis, and energy notes.
```

---

### PROMPT 3: Generate Prompt Library from Content

**Use this when:** You need to extract and organize all the prompts mentioned in a module

```
I need to create a Prompt Library for [MODULE NAME].

Source content:
[PASTE WRITTEN GUIDE OR KEY SECTIONS]

Create a Prompt Library document with 10-15 copy-paste ready prompts organized by:

1. CORE PROMPTS (5-7 prompts)
   - Setup/configuration prompts
   - Main workflow prompts
   - Content generation prompts

2. WORKFLOW PROMPTS (3-4 prompts)
   - Troubleshooting
   - Quality check
   - Optimization

3. SCALING PROMPTS (2-3 prompts)
   - Batch processing
   - Analysis/reporting

For each prompt include:

**Prompt #[X]: [Descriptive Name]**
- Purpose: [What it does]
- When to Use: [Specific scenario]
- Estimated Response Time: [How long AI takes]

**Copy This Prompt:**
```
[Full prompt with clear instructions]

Variables to customize:
- [VARIABLE 1]: [What to put here]
- [VARIABLE 2]: [What to put here]
```

**Example Output:** [Show what they'll get]

**If Output Isn't Right:** [Quick refinement prompt]

---

Make each prompt:
- Self-contained (includes all needed context)
- Customizable with clear [BRACKETS] for variables
- Specific about expected output
- Includes example or sample output

Use the brand voice. Be concise in descriptions, detailed in prompts.
```

---

### PROMPT 4: Create Resource Package Checklist

**Use this when:** You need the downloadable resources for a module

```
Create a Resource Package for [MODULE NAME].

Module details:
- Outcome: [SPECIFIC OUTCOME]
- Tools used: [LIST TOOLS]
- Key steps: [BRIEF OVERVIEW]
- Target audience: [WHO]

Generate:

1. QUICK START CHECKLIST
   - Pre-work items
   - Phase 1-3 implementation steps
   - Testing steps
   - Go-live steps
   With realistic time estimates for each phase

2. IMPLEMENTATION WORKSHEET
   - Fields to capture project details
   - Tool tracking table
   - Progress checklist
   - Testing results section
   - Optimization ideas section

3. TOOL COMPARISON SHEET
   - 3 tool options (recommended, budget, premium)
   - Feature comparison table
   - Decision matrix (when to choose each)

4. TROUBLESHOOTING GUIDE
   - 3-5 common issues
   - Symptoms, causes, solutions for each
   - Diagnostic checklist

5. PROGRESS TRACKER
   - Week 1 baseline metrics template
   - Week 2 update template
   - Month 1 review template
   - ROI calculation fields

6. QUICK REFERENCE CARD
   - One-page cheat sheet
   - Core workflow diagram
   - Essential prompts (one-liner versions)
   - Quick links
   - Key settings
   - Common shortcuts

Format as a ready-to-download document. Be specific and actionable. Include tables and checklists that students can actually fill in and use.
```

---

### PROMPT 5: Optimize Existing Content

**Use this when:** You have a draft that needs improvement

```
I have draft content for [MODULE NAME] that needs optimization.

Current draft:
[PASTE CONTENT]

Issues I'm seeing:
- [ISSUE 1: e.g., "Too technical/jargony"]
- [ISSUE 2: e.g., "Missing clear examples"]
- [ISSUE 3: e.g., "Steps aren't specific enough"]

Target audience: [WHO]
Desired outcome: [WHAT]
Brand voice: [CHARACTERISTICS]

Please revise this content to:

1. Fix the issues listed above
2. Improve clarity and specificity
3. Add concrete examples where missing
4. Ensure it follows the brand voice
5. Make it more actionable and implementable
6. Improve scannability with better formatting

Maintain the core structure but feel free to:
- Rewrite sections that aren't working
- Add missing elements
- Remove unnecessary parts
- Reorganize for better flow

Provide the revised version with a brief explanation of key changes made.
```

---

### PROMPT 6: Create Module from Scratch

**Use this when:** Starting a new module without a knowledge dump

```
I need to create a complete module on [TOPIC] for LVL UP AI ACADEMY.

Module details:
- Name: [MODULE NAME]
- Category: [Marketing/Sales/Support/Analytics/Strategy]
- Target audience: [BUSINESS OWNERS/MARKETERS WITH SPECIFIC CHARACTERISTICS]
- Skill level: [Beginner/Intermediate/Advanced]
- Primary goal: [WHAT STUDENTS WILL ACHIEVE]
- Time to implement: [ESTIMATED HOURS/DAYS]

What I know about this topic:
[YOUR EXPERTISE/KNOWLEDGE IN BULLET POINTS]

Tools commonly used:
- [TOOL 1]
- [TOOL 2]
- [TOOL 3]

Please create:

1. MODULE OUTLINE
   - Learning objectives (3-5 specific outcomes)
   - Prerequisites
   - Tools needed
   - Implementation steps (high-level)
   - Estimated ROI/time savings

2. DETAILED WRITTEN GUIDE (2,500-3,500 words)
   Following standard structure:
   - Introduction
   - Prerequisites
   - Step-by-step implementation
   - Testing & results
   - Optimization
   - Troubleshooting
   - Next steps

3. KEY PROMPTS (5-7 copy-paste prompts)
   For the most important steps

4. RESOURCE LIST
   - Required tools (with alternatives)
   - Templates needed
   - Related modules

Include specific, actionable details. Use examples. Anticipate questions and challenges. Make it practical and achievable.

Start with the outline for my approval before writing the full guide.
```

---

### PROMPT 7: Repurpose Content for Marketing

**Use this when:** You want to create marketing content from a finished module

```
I finished creating [MODULE NAME] and need marketing content to promote it.

Module summary:
- Outcome: [SPECIFIC TRANSFORMATION]
- Target audience: [WHO]
- Key benefits: [3-5 BENEFITS]
- Time to implement: [X HOURS]
- ROI: [TIME/MONEY SAVED]

Source content:
[PASTE KEY SECTIONS OR FULL GUIDE]

Create marketing content:

1. LINKEDIN POST (150-200 words)
   - Hook with transformation
   - Brief explanation
   - Call to action
   - 3-5 relevant hashtags

2. EMAIL SEQUENCE (3 emails)
   - Email 1: Introduce the problem (150 words)
   - Email 2: Present the solution (200 words)
   - Email 3: Share testimonial/result + CTA (150 words)
   Each with subject line

3. TWITTER THREAD (8-10 tweets)
   - Thread on the complete system
   - Actionable, specific tips
   - Each tweet under 280 characters

4. SHORT-FORM VIDEO SCRIPT (60 seconds)
   - Hook (5 seconds)
   - Problem (10 seconds)
   - Solution overview (30 seconds)
   - Result/proof (10 seconds)
   - CTA (5 seconds)

5. INSTAGRAM CAPTION (100-150 words)
   - Engaging hook
   - Value bullets
   - Strong CTA
   - Hashtags

Make it engaging and benefit-focused. Use social proof where possible. Include clear CTAs. Match the brand voice (conversational, results-driven, no fluff).
```

---

### PROMPT 8: Create Supplementary Content

**Use this when:** You need FAQ, case studies, or bonus materials

```
For [MODULE NAME], I need supplementary content to support students.

Module overview:
[BRIEF DESCRIPTION OF WHAT THE MODULE TEACHES]

Create:

1. FAQ (10-15 questions)
   Common questions students will have about:
   - Tools/costs
   - Technical requirements
   - Time investment
   - Results/ROI
   - Troubleshooting
   - Next steps
   
   Each with clear, concise answers

2. CASE STUDY TEMPLATE
   Structure for documenting student success:
   - Background
   - Challenge
   - Implementation
   - Results
   - Key takeaways
   
   Include 2-3 fictional but realistic examples

3. ADVANCED TIPS BONUS
   3-5 advanced optimizations for students who:
   - Completed the basic implementation
   - Want to level up
   - Have more time/budget to invest

4. COMMON MISTAKES GUIDE
   5-7 mistakes students make with:
   - Why it's a mistake
   - How to avoid it
   - What to do instead

5. SUCCESS METRICS TEMPLATE
   How to measure success:
   - Baseline metrics to capture
   - Progress tracking method
   - ROI calculation formula
   - Week 1, Month 1, Quarter 1 benchmarks

Make it practical and specific. Use examples. Keep the helpful, encouraging tone.
```

---

## 🔄 ITERATION & REFINEMENT PROMPTS

**When output is too long:**
```
This is good but too long. Can you condense it to [TARGET LENGTH] while keeping all the essential information? Focus on the most actionable parts.
```

**When output is too vague:**
```
This needs more specificity. For each step/recommendation:
- Add exact actions to take
- Include what they should see/expect
- Give concrete examples
- Add screenshots descriptions

Make it so specific that someone could follow it without asking questions.
```

**When tone is off:**
```
The content is good but the tone isn't quite right. Can you rewrite this in a more [conversational/direct/encouraging/energetic] way? Think of it as teaching a smart friend, not writing a textbook.

Less: [EXAMPLE OF WHAT TO AVOID]
More: [EXAMPLE OF DESIRED TONE]
```

**When examples are needed:**
```
Add 2-3 specific examples for [SECTION]. Show how someone in [INDUSTRY 1], [INDUSTRY 2], and [INDUSTRY 3] would implement this differently. Make the examples realistic and detailed.
```

**When structure needs adjustment:**
```
The content is here but the structure isn't working. Can you reorganize this to:
- Lead with the outcome/benefit
- Group related information together
- Put the most important stuff first
- Make it easier to scan

Suggest a better outline, then rewrite following that structure.
```

---

## 💡 PRODUCTION WORKFLOW TIPS

**1. Start with Knowledge Dump**
Record yourself talking through the topic for 60-90 min. Use Prompt 1 to transform it.

**2. Build Sequentially**
- Written Guide first (Prompt 1 or 6)
- Then Video Script (Prompt 2)
- Then Prompt Library (Prompt 3)
- Finally Resource Package (Prompt 4)

**3. Iterate in Batches**
Don't try to perfect one section. Get full draft of everything, then refine.

**4. Use Follow-Ups**
First output is rarely perfect. Use iteration prompts to dial it in.

**5. Maintain Consistency**
Keep the system prompt active for all module creation to maintain voice/structure.

**6. Leverage Examples**
After your first 2-3 modules, feed those as examples to AI for better output.

---

## 📋 QUALITY CHECKLIST

Before publishing any module content, verify:

**Content Quality:**
- [ ] Clear, specific outcome stated upfront
- [ ] All steps are actionable (not vague)
- [ ] Includes copy-paste prompts/templates
- [ ] Has real examples (not just theoretical)
- [ ] Includes troubleshooting section
- [ ] Links to related modules
- [ ] Shows ROI/time savings

**Brand Voice:**
- [ ] Conversational, not formal
- [ ] Uses "you" language
- [ ] Encouraging and practical
- [ ] No unnecessary jargon
- [ ] Short sentences and paragraphs

**Structure:**
- [ ] Easy to scan (clear headings)
- [ ] Logical flow (step-by-step)
- [ ] Right mix of detail (not too much/little)
- [ ] Includes visual descriptions
- [ ] Has clear next steps

**Accessibility:**
- [ ] Beginner-friendly explanations
- [ ] Free tool alternatives mentioned
- [ ] Realistic time estimates
- [ ] Multiple industry examples
- [ ] No assumed technical knowledge

---

## 🚀 QUICK START GUIDE

**Your First Module:**

1. **Record Knowledge Dump** (60 min)
   - Talk through everything you know about the topic
   - Use simple outline as guide
   - Don't worry about being perfect

2. **Generate Written Guide** (30 min)
   - Use Prompt 1 with transcript
   - Review and personalize output
   - Add your specific examples

3. **Create Video Script** (20 min)
   - Use Prompt 2 with written guide
   - Adjust for your speaking style

4. **Build Prompt Library** (20 min)
   - Use Prompt 3 to extract prompts
   - Test each prompt to verify quality

5. **Assemble Resources** (30 min)
   - Use Prompt 4 for package
   - Customize with your specific tools

6. **Review & Refine** (30 min)
   - Use quality checklist
   - Make final adjustments
   - Get it shipped!

**Total: ~3 hours for complete module** (vs. 12-20 hours manually)

---

**Save this document. Reference it for every module. Iterate on the prompts based on what works for you.**

**Now go create something awesome! 🚀**

---

*© LVL UP AI ACADEMY - Internal Production Guide*
