# **MODULE 5: SOCIAL MEDIA AGENTIC FRAMEWORK**

**" The 24/7 Engagement Machine"**

## **1\. Module Overview**

* **Category:** Marketing Automation & Operations  
* **Target Audience:** Brands overwhelmed by DMs/comments or missing opportunities because they can't monitor social media 24/7.  
* **Skill Level:** Intermediate to Advanced  
* **Primary Goal:** Build a system that monitors social channels, filters out noise (spam), identifies high-value interactions, and drafts context-aware responses automatically.  
* **Time to Implement:** 1–2 Days (Setup \+ Testing)

## **2\. Learning Objectives**

1. **Agentic Logic:** Understand the difference between a "Trigger" (Zapier) and an "Agent" (AI that decides *if* and *how* to respond).  
2. **Sentiment Analysis:** Configure AI to detect "Urgency," "Anger," or "Sales Intent" in comments.  
3. **The "Human-in-the-Loop" Dashboard:** Build a system that drafts replies but waits for your approval (safety first).  
4. **Multi-Channel Listening:** aggregating Twitter mentions, LinkedIn comments, and IG DMs into a single stream.

## **3\. Implementation Steps (High-Level)**

* **Step 1:** The "Listener" Setup (Connecting Buffer/Social triggers to Make.com).  
* **Step 2:** The "Brain" Configuration (OpenAI API prompt for classification & drafting).  
* **Step 3:** The "Router" (Logic paths: Spam → Archive; Lead → CRM; Question → Draft Reply).  
* **Step 4:** The "Approval Interface" (Using Slack or Airtable/Sheets to approve replies with one click).

## **4\. Estimated ROI**

* **Time:** Saves 10-15 hours/week of manual social checking.  
* **Money:** Captures leads within 5 minutes of them asking a question (Speed-to-Lead increases conversion by \~400%).

---

## **5\. DETAILED WRITTEN GUIDE**

### **Introduction: From "Posting" to "Engaging"**

Most people use automation to *broadcast* (posting content). Very few use it to *listen* (engagement).

The problem is volume. You cannot read every comment. But hidden in those comments are three things:

1. **Money:** "How much is this?" (Sales Lead)  
2. **Fire:** "My account is broken\!" (Support Issue)  
3. **Noise:** "Great post\! 🔥" (Low Priority)

In this module, we are building an **AI Agent**. Unlike a simple automation, an Agent evaluates the input and *chooses* a path. It filters the noise so you only see the signal.

### **Prerequisites**

* **Make.com Account:** We recommend Make over Zapier for this specific module because its visual branching logic is better for handling "If/Else" agent decisions.  
* **Social Connection:** Buffer (for easier API access) or direct connections to Twitter/LinkedIn.  
* **OpenAI API Key:** (Paid account setup).  
* **Communication Hub:** Slack, Discord, or Google Sheets (Where you will approve the drafts).

---

### **Step-by-Step Implementation**

#### **Step 1: The "Listener" (The Trigger)**

We need a way to grab comments as they happen.

* **Option A (Easy):** Use **Buffer**. If you use Buffer to reply, it creates a "New Conversation" trigger.  
* **Option B (Direct):** Use Make.com modules for "Watch Mentions" (Twitter) or "Watch Comments" (LinkedIn/Instagram).  
* *Action:* Create a Scenario in Make. Set the trigger to **Twitter (X) \- Watch Mentions**.

#### **Step 2: The "Brain" (The Classifier)**

We don't want to reply to everything. We need the AI to label the incoming data first.

1. Add an **OpenAI** module: "Create a Completion".  
2. **System Prompt:** "You are a Social Media Manager. Analyze the incoming comment."  
3. **Task:**  
   * "Classify this text into one of 4 categories:  
     1. SPAM (Crypto bots, hate speech, self-promo).  
     2. PRAISE (Generic compliments like 'Nice post').  
     3. SUPPORT (Complaints, bugs, help requests).  
     4. LEAD (Pricing questions, specific inquiries)."  
   * "Output Format: JSON."

#### **Step 3: The "Router" (The Logic)**

This is where Make.com shines. You add a **Router** module (the purple dots) to split the path based on the AI's classification.

* **Path A (If Category \= SPAM):**  
  * Action: Do nothing. Or add to a "Block List" sheet.  
* **Path B (If Category \= PRAISE):**  
  * Action: "Like" the comment (if API allows) or archive it. (Don't waste API credits writing complex replies to "Nice\!").  
* **Path C (If Category \= LEAD or SUPPORT):**  
  * Action: Proceed to Step 4 (Drafting).

#### **Step 4: The "Drafter" (The Agent)**

On Path C (Leads/Support), we add a second AI step.

1. **OpenAI Module:** "Create a Completion".  
2. **Prompt:** "Context: A user posted \[Comment Text\]. Category is \[Category\].  
   * Task: Write a short, empathetic, on-brand reply.  
   * If SUPPORT: Apologize for the issue and ask them to DM us their email.  
   * If LEAD: Answer their question briefly and invite them to book a call at \[Link\].  
   * Constraint: Keep it under 280 characters."

#### **Step 5: The "Human Approval" (Safety Layer)**

**NEVER** let an AI auto-post replies to customers without a check. AI hallucinations can ruin your reputation.

1. **Action:** Add a **Slack** (or Discord/Email) module.  
2. **Message:** "🚨 **New High-Priority Social Comment** 🚨  
   * **User:** @\[Username\]  
   * **Said:** \[Comment Text\]  
   * **AI Draft:** \[Draft Reply\]  
   * **Link:** \[Link to Post\]"  
3. **The Workflow:** You get the ping on your phone. You click the link, copy the AI draft (if it's good), paste it, and hit reply.

*Pro Level:* In Make.com, you can add "Buttons" to the Slack message to "Post Automatically" if you click "Approve," but that requires advanced API handling. For now, Copy-Paste is the safest MVP (Minimum Viable Product).

---

### **Testing & Results**

1. **The "Bot" Test:** Reply to one of your own posts with a generic "Promote it on @scam\_account".  
   * *Result:* The system should classify it as SPAM and the Router should stop it. You should receive NO Slack notification.  
2. **The "Client" Test:** Reply to your post with "Do you guys offer consulting?"  
   * *Result:* The system should classify as LEAD. You should get a Slack ping with a draft: "Hi\! Yes we do. Check out our packages here..."

### **Optimization**

* **Context Injection:** In the "Drafter" prompt, inject your pricing or FAQ. "If they ask about price, our price is $99." Now the AI drafts accurate answers.  
* **Sentiment overrides:** If Sentiment is "Negative" (Angry), force the routing to SUPPORT even if they ask a sales question. Angry people need help, not sales pitches.

### **Troubleshooting**

* **Issue:** *Make.com scenario turns off automatically.*  
  * **Fix:** Check your error logs. Usually, the social API token expired (LinkedIn expires every 60 days). Re-connect the account.  
* **Issue:** *The AI replies to its own replies.*  
  * **Fix:** Add a filter in the Trigger step: User Handle \[Does not equal\] \[Your Handle\].

### **Next Steps**

You now have a 24/7 listener.

* **Next Module:** Now that you have social monitoring, you might want to look at **AI for Long-Form Video** to create the content that drives these comments.

---

## **6\. KEY PROMPTS (Copy & Paste)**

**The "Triage Agent" Prompt (Make.com \- AI Step 1\)**

"You are the gatekeeper for my social media.

**Input:** \[Social Comment Variable\]

**Task:** Analyze the intent. Return ONLY a JSON object with two fields:

1. category: Choose strictly from \['SPAM', 'PRAISE', 'SUPPORT', 'LEAD', 'TROLL'\].  
2. sentiment: Choose from \['POSITIVE', 'NEUTRAL', 'NEGATIVE'\].

**Definitions:**

* SUPPORT: User has a problem/bug.  
* LEAD: User asks a question indicating interest in buying.  
* TROLL: User is being aggressive or mocking without a valid complaint.

**Output Example:**

{"category": "LEAD", "sentiment": "POSITIVE"}"

**The "Response Architect" Prompt (Make.com \- AI Step 2\)**

"You are a witty, professional Social Media Manager.

**Context:**

* User Comment: \[Comment Variable\]  
* Category: \[Category Variable\]  
* Sentiment: \[Sentiment Variable\]

**Instruction:** Draft a reply.

* Tone: Helpful, casual, use 1 emoji max.  
* If SUPPORT: Empathize, do not be defensive. Ask to move to DMs.  
* If LEAD: Provide value first. Then soft pitch.  
* If TROLL: Write a witty, non-offensive clapback OR ignore (if ignore, return string 'IGNORE').

**Constraint:** Output ONLY the reply text."

---

## **7\. RESOURCE LIST**

**Required Tools:**

* **Make.com:** (Recommended for the routing logic).  
* **OpenAI API Account:** (gpt-4o-mini is great for this—cheap and fast).  
* **Social Accounts:** Twitter/X, LinkedIn, Instagram (Professional accounts often required for API access).

**Templates:**

* **Make.com Blueprint:** (If available, search the Make library for "Social Media Sentiment Analysis").

**Related Modules:**

* **Module 4:** Automation Blueprint (Foundational logic used here).  
* **Module 3:** Content Fundamentals (Provides the "Voice" for the AI agent).

